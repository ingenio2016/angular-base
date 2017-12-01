import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService {
  //Listado de Productos

  private products:Product[]= [
  {
      productId : 1,
      name : "Jabón de Baño",
      price : 1200,
      stock : 5
  },
  {
      productId : 2,
      name : "Shampoo para Caballero",
      price : 7200,
      stock : 2
  },
  {
      productId : 3,
      name : "Crema Dental",
      price : 2200,
      stock : 10
  },
  {
      productId : 4,
      name : "Papel Higiénico",
      price : 1200,
      stock : 5
  },
  {
      productId : 5,
      name : "Gel Antibacterial",
      price : 5300,
      stock : 4
  },
  {
      productId : 6,
      name : "Deshodorante para Dama",
      price : 3200,
      stock : 7
  },
  {
      productId : 7,
      name : "Deshodorante para Caballero",
      price : 3700,
      stock : 5
  },
  {
      productId : 8,
      name : "Toallas Higiénicas",
      price : 3800,
      stock : 10
  },
  {
      productId : 9,
      name : "Topitos",
      price : 2300,
      stock : 4
  },
  {
      productId : 10,
      name : "Cepillo de Dientes",
      price : 5200,
      stock : 3
  },
  {
      productId : 11,
      name : "Arros refinado",
      price : 3200,
      stock : 20
  },
  {
      productId : 12,
      name : "Pasta Larga",
      price : 5000,
      stock : 8
  },
  {
      productId : 13,
      name : "Avena de Trigo",
      price : 4200,
      stock : 10
  },
  {
      productId : 14,
      name : "Aceite Vegetal",
      price : 6200,
      stock : 8
  },
  {
      productId : 15,
      name : "Leche en Polvo",
      price : 8000,
      stock : 10
  },
  {
      productId : 16,
      name : "Harina Domestica",
      price : 3200,
      stock : 7
  },
  {
      productId : 17,
      name : "Gelatina",
      price : 1700,
      stock : 20
  },
  {
      productId : 18,
      name : "Mayonesa",
      price : 3800,
      stock : 12
  },
  {
      productId : 19,
      name : "Salsa de Tomate",
      price : 4300,
      stock : 12
  },
  {
      productId : 20,
      name : "Mostaza",
      price : 6500,
      stock : 7
  }
]




  constructor( private _http:HttpClient ) {
    console.log("Servicio de Shopping Cart Listo");
  }

  getProducts(){
    return this.products
  }

  searchProducts(termino:string){
   let productsArray:Product[] = [];
   termino = termino.toLowerCase();

   for(let product of this.products){
     let nombre = product.name.toLowerCase();
     if(nombre.indexOf( termino ) >= 0){
       productsArray.push(product);
     }
   }
   return productsArray;
  }

}

export interface Product {
  productId : number,
  name : string,
  price : number,
  stock : number
}

export interface ShopCart {
  productId : number,
  name : string,
  price : number,
  cant : number
}
