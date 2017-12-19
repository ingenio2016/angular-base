import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';
import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';

//Routes Import
import { APP_ROUTING } from './app.routes';

//Providers/Services
import {ChatService} from './providers/chat.service';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
