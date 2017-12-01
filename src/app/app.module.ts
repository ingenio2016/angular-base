import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Archivo de Rutas
import { APP_ROUTING } from "./app.routes";

//Importo los Services
import { ProductsService } from "./services/products.service";


//Modulo de Http
import { HttpClientModule } from "@angular/common/http";

//Modulos de Forms
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ShopComponent } from './components/shop/shop.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ShopComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
