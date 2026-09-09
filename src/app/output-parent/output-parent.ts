import { Component } from '@angular/core';
import { OutputChild } from "./output-child/output-child";

@Component({
  imports: [OutputChild],
  selector: 'app-output-parent',
  styleUrl: './output-parent.css',
  templateUrl: './output-parent.html',
})
export class OutputParent {


     receivedtraditionalMessage :string  = "No Messsage received from my Freind";
    receiveTraditionalOutput(message:string){
       //console.log(message);
       this.receivedtraditionalMessage = message
    }


    receiveModrenOutput(message:string){
       //console.log(message);
       this.receivedtraditionalMessage = message
    }

}
