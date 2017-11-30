import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Archivo de Rutas
import { APP_ROUTING } from "./app.routes";

//Importo los Services
import { SpotifyService } from "./services/spotify.service";

//Modulo de Http
import { HttpClientModule } from "@angular/common/http";

//Modulos de Forms
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './components/shared/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
