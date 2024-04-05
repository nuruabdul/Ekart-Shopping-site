import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent implements OnInit {
  // name = "John Smith";
 
  addToCart: number = 0; 

  //ngFor tutorial
  listOfString: string[] = ['Mark', 'Steve', 'Mary', 'John', 'Steve'];

 
  product = {
    name:  'Iphone 13',
    price:789,
    color: 'red',
    discount: 8.5,
    inStock: 5,
    pImage: '/assets/Iphone.jpg'

    
  }
   getDiscountedPrice(){
   return  this.product.price - (this.product.price * this.product.discount / 100)
   }
   onNameChange(event: any){
    // this.name = 'Steve';
    // console.log(event.target.value);
    // this.name = event.target.value;   //Displays the input below it as one types,
   }
   decrementCartValue(){
    if(this.addToCart > 0){
      this.addToCart--;
    }
     

   }
   incrementCartValue(){
    if(this.addToCart < this.product.inStock)
      this.addToCart++;
   }
   constructor() {}

   ngOnInit(): void {
     
   }
}
