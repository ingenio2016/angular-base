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
import { UsersComponent } from './components/chat/users/users.component';

// Routes Import
import { APP_ROUTING } from './app.routes';

// Providers/Services
import {ChatService} from './providers/chat.service';
import { HeaderComponent } from './components/chat/header/header.component';
import { BodyComponent } from './components/chat/body/body.component';
import { FormMessageComponent } from './components/chat/form-message/form-message.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent,
    UsersComponent,
    HeaderComponent,
    BodyComponent,
    FormMessageComponent
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
