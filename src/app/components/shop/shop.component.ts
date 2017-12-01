import { Component, OnInit } from '@angular/core';
import { ProductsService, Product, ShopCart } from "../../services/products.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styles: []
})
export class ShopComponent implements OnInit {
  productList:Product[]=[];
  termino:string = "";//variable que toma lo escrito en el buscador
  totalShop:number = 0;

  //lista de productos adquiridos
  shopcart:ShopCart[]=[];
  productToCart:any[]=[];
  constructor( public _productsService:ProductsService ) {
      this.cargarData();
  }

  buscarProductos(){
    if(this.termino == ""){
      this.cargarData();
    }else{
      this.productList = this._productsService.searchProducts(this.termino);
    }
  }

  //Funcion de comprar
  comprar(prod, productIndex){
    if(prod.stock > 0){
      console.log(prod.name);
      if(this.shopcart != null){
        //Verifico si Existe en el stock
        let shopIndex = this.shopcart.findIndex(x=> x.productId === prod.productId);
        if(shopIndex >= 0){
          this.shopcart[shopIndex].cant ++;
        }else{
          let shop:ShopCart = {
            productId: prod.productId,
            name: prod.name,
            cant: 1,
            price: prod.price
          }
          this.shopcart.push(shop);
        }
      }else{
        let shop:ShopCart = {
          productId: prod.productId,
          name: prod.name,
          cant: 1,
          price: prod.price
        }
        this.productToCart.push(shop);
        this.shopcart = this.productToCart;
      }
      //Disminuyo el product
      this.productList[productIndex].stock --;
      if(this.productList[productIndex].stock == 0){
        this.productList.splice(productIndex, 1);
      }
      this.agregarItem()
      console.log(this.shopcart);
    }
  }

//Borrar elemento del carrito
  dropItem(prod, productIndex){
    if(prod.cant > 0){
      if(this.productList != null){
        //Verifico si Existe en el Listado de Productos
        let shopIndex = this.productList.findIndex(x=> x.productId === prod.productId);
        if(shopIndex >= 0){
          this.productList[shopIndex].stock ++;
        }else{
          let shop:Product = {
            productId: prod.productId,
            name: prod.name,
            stock: 1,
            price: prod.price
          }
          this.productList.push(shop);
        }
      }else{
        let shop:Product = {
          productId: prod.productId,
          name: prod.name,
          stock: 1,
          price: prod.price
        }
        this.productToCart.push(shop);
        this.productList = this.productToCart;
      }
      //Disminuyo el product
      this.shopcart[productIndex].cant --;
      if(this.shopcart[productIndex].cant == 0){
        this.shopcart.splice(productIndex, 1);
      }
      this.agregarItem();
      this.totalShopCart();
    }

  }

  //Logica del LocalStorage
  agregarItem(){
    localStorage.removeItem("shopingCart");
    localStorage.removeItem("productList");
    this.actualizarData();
  }

  actualizarData(){
    localStorage.setItem("shopingCart", JSON.stringify(this.shopcart));
    localStorage.setItem("productList", JSON.stringify(this.productList));
  }

  cargarData(){
    this.shopcart = JSON.parse(localStorage.getItem("shopingCart"))
    this.productList = JSON.parse(localStorage.getItem("productList"))
    if(this.productList == null || this.productList.length == 0){
      this.productList = this._productsService.getProducts();
    }
  }

  totalShopCart(){
    let total:number = 0;
    this.shopcart.forEach(item => {
      total += item.price * item.cant;
    })
    this.totalShop = total;
  }

  ngOnInit() {
  }

}
