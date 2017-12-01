import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ShopComponent } from "./components/shop/shop.component";


const APP_ROUTES = [
  { path: 'home', component: HomeComponent },
  { path: 'shopcart',  component: ShopComponent },
  { path: '**', pathMatch:'full', redirectTo: 'home' }
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });
