import { Component, EventEmitter, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-output-child',
  styleUrl: './output-child.css',
  templateUrl: './output-child.html',
})
export class OutputChild {


     traditionalMessageText = "Hi, How Are you ??"

     @Output() traditionalEmployeeAction  = new EventEmitter<string>();

     ModrenEmployeeAction = output<string>();


     sendModrenMessage(){
         this.ModrenEmployeeAction.emit(this.traditionalMessageText);
     }


     sendTraditionalMessage(){
            this.traditionalEmployeeAction.emit(this.traditionalMessageText);
     }



}
