import { Component, Input , input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-input-child',
  styleUrl: './input-child.css',
  templateUrl: './input-child.html',
})
export class InputChild {

  // @Input({
  //   required:true,
  //   alias:'tradEmployeeName'
  // }) traditionalEmployeeName = '';


  //abc = input.required('Guest' , {});
  traditionalEmployeeName = input("Guest", {
    alias:'tradEmployeeName',
    transform:((value:string)=> value.trim().toUpperCase())
  });



   //@Input() traditionalEmployeeRole = '';
 traditionalEmployeeRole = input<string>();

}
