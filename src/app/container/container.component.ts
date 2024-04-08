import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {

  // name = "John Smith";

  addToCart: number = 0;

  //ngFor tutorial
  listOfString: string[] = ['Mark', 'Steve', 'Mary', 'John', 'Steve'];
  
  searchText: string = '';

  @ViewChild(ProductListComponent) productListComponent: ProductListComponent;

 
   item = {
    name: 'Iphone 13',
    price: 789,
    color: 'red',
    discount: 8.5,
    inStock: 5,
    pImage: '/assets/Iphone.jpg'


  }
  getDiscountedPrice() {
    return this.item.price - (this.item.price * this.item.discount / 100)
  }
  onNameChange(event: any) {
    // this.name = 'Steve';
    // console.log(event.target.value);
    // this.name = event.target.value;   //Displays the input below it as one types,
  }
  decrementCartValue() {
    if (this.addToCart > 0) {
      this.addToCart--;
    }


  }
  incrementCartValue() {
    if (this.addToCart < this.item.inStock)
      this.addToCart++;
  }

  setSearchText(value: string) {
    this.searchText = value;
  }

  //  constructor() {}

  //  ngOnInit(): void {

  //  }
}
