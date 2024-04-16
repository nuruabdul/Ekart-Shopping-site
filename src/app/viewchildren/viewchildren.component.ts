import { Component, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-viewchildren',
  templateUrl: './viewchildren.component.html',
  styleUrl: './viewchildren.component.css'
})
export class ViewchildrenComponent {
  
  @ViewChildren('inputEl' , { }) inputElements: QueryList<ElementRef>;

  fullName: string = '';
  constructor(private router:Router) {
  
  }

show(){
  let name = ' '
  // console.log(this.inputElements.nativeElement);   //When using @viewchild,logging the first,single input elements
  this.inputElements.forEach((el) => {
    // console.log(el.nativeElement.value);                    //When using viewchildren,logging in console,the whole list,value displays the nsme inserted by the user.
    name += el.nativeElement.value + ' '
  })
  this.fullName = name.trim();
}   //trim any extra space
 



}
