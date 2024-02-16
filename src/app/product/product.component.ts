import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";
import {ProductModel} from "../model/product.model";
import {Observable} from "rxjs";
//import {HttpClientModule} from "@angular/common/http";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
 // private http:HttpClientModule;
   //constructor(private http:HttpClient) {
    // this.http=http;
  // }

 // products:Array<ProductModel>=[
   /* {id:1,name:"Computuer",price:4500,checked:false},
    {id:1,name:"Computuer",price:4200,checked:true},
    {id:1,name:"Computuer",price:4300,checked:false}*/
 // ]
 // products$!:Observable<Array<ProductModel>>; REPLACE AS FOLLOW:
 public products:Array<ProductModel>=[];// use it for delete also
 public keyword:string="";
  constructor(private productService:ProductService) {
  }


  handleCheckProduct(product: ProductModel) {
   //  this.http.patch("http://localhost:8089/products/"+product.id, {checked:!product.checked})
    //USE TEMPLATE STRING RATHER
  //  this.http.patch<any>(`http://localhost:8089/products/${product.id}`,
     // {checked:!product.checked})
    this.productService.checkProduct(product)
        .subscribe({
        next:updateProduct=>{
         // product.checked=!product.checked; it works//or else:
        /*  this.products.map(p=>{
            if(p.id==product.id){
              return updateProduct;
            }
          })*/
          product.checked=!product.checked;
          //this.getProducts();
        }
    })
  }
 /* ngOnInit(): void {
   this.http.get<Array<any>>("http://localhost:8089/products")
      .subscribe({
        next:(data: any) =>{
          this.products=data
        },
        error:err => {
          console.log(err);
        }
      });
  }*/

  ngOnInit(): void {
    this.getProducts();
  }

  //Server rendered side:
  getProducts(){
  //  this.http.get<Array<any>>("http://localhost:8089/products")
    /* You can do this
    this.productService.getProducts()
      .subscribe({
        next:(data: any) =>{
          this.products=data;
        },
        error:err => {
          console.log(err);
        }
      });*/
     //or you can do this:
   // this.products$=this.productService.getProducts()  REPLACE AS FOLLOW:
    this.productService.getProducts()
      .subscribe({
        next:(data: any) =>{
          this.products=data;
        },
        error:err => {
          console.log(err);
        }
      });

  }

  handleDeleteProduct(product: ProductModel) {
    if(confirm("Etes-vous sûr de vouloir supprimer ?"))
    this.productService.deleteProduct(product).subscribe({
      next:value => {
        //this.getProducts();REPLACE AS FOLLOW:
        this.products=this.products.filter(p=>p.id!=product.id);
      }
    })
  }

  searchProducts() {
   this.productService.searchProducts(this.keyword).subscribe({
     next:value => {
       this.products=value;
     },error:err => {

     }
   })
  }
}
