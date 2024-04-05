import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input()
    all: number = 0;

    @Input()
    inStock: number = 0;

    @Input()
    outOfstock: number = 0;

    @Output()
    selectedFilterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();

    selectedFilterRadioButton: string = 'all';


     onSelectedFilterRadioButtonChanged(){
      // console.log(this.selectedFilterRadioButton);
      // this.selectedFilterRadioButtonChanged.emit                    //Emitted in console when selection is changed to instock,outof stock or back to all.
    
      // console.log("selectedFilterRadioButtonChanged event raised")
      this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
     }
}
//For input from parent to child, we use property binding
//For Output, child to parent, we use event binding.