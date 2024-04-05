import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
//searchText: string = ''; //We use property binding from component to view template.
 constructor() {}

 ngOnInit(): void {
   
 }

enteredSearchValue: string = ''; 

//1.Create an event.
//2.Raise the event,searchtextchanged

@Output()
searchTextChanged:EventEmitter<string> = new EventEmitter<string>();

onSearchTextChanged(){
  this.searchTextChanged.emit(this.enteredSearchValue);
}

// updateSearchText(event:any){
//    this.searchText = event.target.value;
// }
}


//E.g,Displaying only the products(product-list- child) that the user types in the searchbox{child}, parent- container component.
// For non-related components such as child to child, we pass data to parent from child 1, then child 2 receives it from parent.
//The output process from child 1 is shown above.
