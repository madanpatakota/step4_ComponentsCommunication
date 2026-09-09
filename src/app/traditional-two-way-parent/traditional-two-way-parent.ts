import { Component } from '@angular/core';
import { TraditionalTwoWayChild } from './traditional-two-way-child/traditional-two-way-child';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [TraditionalTwoWayChild , FormsModule],
  selector: 'app-traditional-two-way-parent',
  styleUrl: './traditional-two-way-parent.css',
  templateUrl: './traditional-two-way-parent.html',
})
export class TraditionalTwoWayParent {

   parentQuantity = 10;

   ResetQuantity(){
     this.parentQuantity = 10;
   }


   parentQuanityChange(message:number){
       this.parentQuantity = message;
   }

}
