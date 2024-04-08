import { Component, ElementRef, EventEmitter,Output, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
//searchText: string = ''; //We use property binding from component to view template.
//  constructor() {}

//  ngOnInit(): void {
   
//  }

searchText: string = ''; 

//1.Create an event.
//2.Raise the event,searchtextchanged

@Output()
searchTextChanged:EventEmitter<string> = new EventEmitter<string>();          //Event


//Optional 2nd argument of @ViewChild()
//1.read.Use it to to read the different token from the queried elements.
//2.Static: Determines when the query is resolved.
//       This is when the view is initialized (before the first change detection) for the first time.
//         False if u want it to be resolved after every change detection.
//               ('searchInput', {static:false})
@ViewChild('searchInput') searchInputEL: ElementRef;
                 //  onSearchTextChanged, search functionality when user starts typing without clicking the btn
onSearchTextChanged(){             
  // this.searchTextChanged.emit(this.searchText);
}

// updateSearchText(event:any){
//    this.searchText = event.target.value;
// }

                     // <!-- Template Reference Variable. Search functionality when btn is clicked. -->

updateSearchText(){                                  //the updateSearchText method will be called whenever the user types into the input field, updating the searchText property and emitting the searchTextChanged event with the updated value. This allows the parent component to react to the changes and perform search operations accordingly.
  //  this.searchText = event.target.value;
  // console.log(InputEL.value);
  this.searchText = this.searchInputEL.nativeElement.value;
  this.searchTextChanged.emit(this.searchText);
  
}
}


//E.g,Displaying only the products(product-list- child) that the user types in the searchbox{child}, parent- container component.
// For non-related components such as child to child, we pass data to parent from child 1, then child 2 receives it from parent.
//The output process from child 1 is shown above.
