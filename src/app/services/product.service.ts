import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductModel} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  /* now need to precise real type not "any" in production
 public getProducts():Observable<any[]>{
    return this.http.get<Array<any>>("http://localhost:8089/products")
  }

  public checkProduct(product:any):Observable<any>{
    return  this.http.patch<any>(`http://localhost:8089/products/${product.id}`,
      {checked:!product.checked});
  }*/
  public getProducts():Observable<Array<ProductModel>>{
    return this.http.get<Array<ProductModel>>("http://localhost:8089/products")
  }

  public checkProduct(product:ProductModel):Observable<ProductModel>{
    return  this.http.patch<ProductModel>(`http://localhost:8089/products/${product.id}`,
      {checked:!product.checked});
  }

  public deleteProduct(product:ProductModel){
    return  this.http.delete<any>(`http://localhost:8089/products/${product.id}`);
  }

  public saveProduct(product: ProductModel):Observable<ProductModel> {
    return  this.http.post<ProductModel>(`http://localhost:8089/products`,product);
  }
}
