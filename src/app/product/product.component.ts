import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  products:Array<any>=[
    {id:1,name:"Computuer",price:4500,checked:false},
    {id:1,name:"Computuer",price:4200,checked:true},
    {id:1,name:"Computuer",price:4300,checked:false}
  ]

  handleCheckProduct(product: any) {
    product.checked=!product.checked;
  }
}
