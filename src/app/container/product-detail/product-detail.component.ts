import { Component, Input } from '@angular/core';
import { Product } from '../../Models/Product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  availableSizes: number[] = [6, 7, 8, 9,10, 11, 12 ]; 
  availableColors: string[] = ['red', 'green', 'black', 'blue', 'brown', 'white']; 
    // product: Product;
    @Input() productListComp: ProductListComponent = undefined;

    product: Product;
   

    ngOnInit(){
      this.product = this.productListComp.selectedProduct;
    }

}
