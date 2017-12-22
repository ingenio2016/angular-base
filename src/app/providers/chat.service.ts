import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Router } from '@angular/router';


// Interfaces import
import {ChatMessage} from '../interfaces/chatMessage.interface';
import {User} from '../interfaces/user.interface';

// Login to provider
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class ChatService {
  // FireBase Collections
  // Chat Collection
  chatsCollection: AngularFirestoreCollection<any>;

  // User Collection
  userCollection: AngularFirestoreCollection<any> = this.afs
    .collection<any>('users', ref => ref.orderBy('name', 'desc'));
  userObservable = this.userCollection.valueChanges();

  public chats: any[] = [];
  public users: any[] = [];
  public user: any = {};
  public userToChat: any[] = [];

  constructor( private afs: AngularFirestore,
               public afAuth: AngularFireAuth,
               private _router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (!user) {
        this._router.navigate( ['login'] );
        return;
      }
      this.user = {
        uid: user.uid,
        name: user.displayName,
        photo: user.photoURL
      };
    });
  }

  loadMessages() {
    console.log(this.userToChat);
    this.chatsCollection = this.afs
      .collection<any>('chats', ref => ref
        .where('receiver', '==', this.user.uid)
        .orderBy('date', 'desc'));

    return this.chatsCollection.valueChanges()
      .map((messages: any[]) => {
        this.chats = [];
        for (const message of messages){
          this.chats.unshift(message);
        }
        return this.users;
      });
  }

  loadUsers() {
    return this.userObservable
      .map((users: any[]) => {
        this.users = [];
        for (const userItem of users){
          this.users.unshift(userItem);
        }
        return this.users;
      });
  }

  loadChatUser(userChat: any) {
    console.log(userChat);
    return this.userToChat = userChat;
  }

  sendMessage(texto: string, receiver: string) {
    if (!this.user) {
      return;
    }
    const message: any = {
      emitter: this.user.uid,
      receiver: receiver,
      message: texto,
      date: new Date().getTime()
    };
    return this.chatsCollection.add( message );
  }

  // Login Logout Endpoints
  login( provider: string ) {
    // Google Login
    if (provider === 'google') {
      return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
  }

    registerUser( userInfo: any ) {
    if (userInfo) {
      let user:any = {
        uid: userInfo.uid,
        name: userInfo.displayName,
        photo: userInfo.photoURL
      }
      this.userCollection.add(user)
        .then((userRef) => {
          this.userCollection.doc(userRef.id).update({
            userid: userRef.id
          }).then(() => {
            this.user.userid = userRef.id;
            this._router.navigate( ['chat'] );
          });
        });
    }
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
