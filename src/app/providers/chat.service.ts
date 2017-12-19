import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import {ChatMessage} from '../interfaces/chatMessage.interface';
import { Router } from '@angular/router';

//Login to provider
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class ChatService {

  public chats:ChatMessage[]=[];
  private itemsCollection: AngularFirestoreCollection<ChatMessage>;
  //user Data from provider
  public user:any = {};
  constructor( private afs:AngularFirestore,
               public afAuth: AngularFireAuth,
               private _router:Router) {
    this.afAuth.authState.subscribe(user=>{
      console.log(user);
      if(!user){
        this._router.navigate( ['login'] );
        return;
      }

      //userData
      this.user.name = user.displayName,
      this.user.id = user.uid,
      this.user.photo = user.photoURL,
      this.user.email = user.email
    })
  }

  loadMessages(){
    this.itemsCollection = this.afs.collection<ChatMessage>('chats', ref => ref.orderBy('date', 'desc').limit(30));
    return this.itemsCollection.valueChanges()
                               .map((messages:ChatMessage[]) =>{
                                 this.chats=[];
                                 for(let message of messages){
                                   this.chats.unshift(message);
                                 }
                                 return this.chats;
                               })
  }

  sendMessage(texto:string){
    let message:ChatMessage = {
      name: 'Joel Ramirez',
      message: texto,
      date: new Date().getTime()
    };

    return this.itemsCollection.add( message );
  }

  //Login Logout Endpoints
  login(provider:string) {
  //Google Login
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }

}
