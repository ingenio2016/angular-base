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
  private itemsCollection: AngularFirestoreCollection<ChatMessage>;
  private usersCollection: AngularFirestoreCollection<any>;

  public chats: ChatMessage[] = [];
  public user: any = {};
  private response: any;

  constructor( private afs: AngularFirestore,
               public afAuth: AngularFireAuth,
               private _router: Router) {
    this.usersCollection = this.afs.collection<ChatMessage>('users');
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
    this.itemsCollection = this.afs.collection<ChatMessage>('chats', ref => ref.orderBy('date', 'desc').limit(30));

    return this.itemsCollection.valueChanges()
                               .map((messages: ChatMessage[]) => {
                                 this.chats = [];
                                 for (const message of messages){
                                   this.chats.unshift(message);
                                 }
                                 return this.chats;
                               });
  }

  sendMessage(texto: string){
    if (!this.user) {
      return;
    }
    const message: ChatMessage = {
      name: 'Joel Ramirez',
      message: texto,
      date: new Date().getTime()
    };
    return this.itemsCollection.add( message );
  }

  // Login Logout Endpoints
  login( provider: string ) {
    // Google Login
    if (provider === 'google') {
      return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
  }

  registerUser( user: any ) {
    if (user) {
      console.log(user);
      return this.usersCollection.add( user );
    }
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
