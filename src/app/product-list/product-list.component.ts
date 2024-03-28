import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  product = {
    name:  'Iphone 13',
    price:789,
    color: 'red',
    discount: 8.5,
    inStock: 5
  }
   getDiscountedPrice(){
   return  this.product.price - (this.product.price * this.product.discount / 100)
   }
}
