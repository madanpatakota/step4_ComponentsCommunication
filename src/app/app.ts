import { Component , signal , computed  , effect} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  /* signal is reactive varaible in angular which stores a value and inform angular 
      when that value changes */


     employeeName   = signal('Peter');
     basicSalary    = signal(30000);


     constructor(){

       //its a function is automatically run as a side-effect wenever
       // the signals read inside that function change..
         effect(()=>{
              console.log(`${this.employeeName()} | Salary: ₹ ${this.basicSalary()}`);
         })
     }


     /* its a read-only signal whose value is automatically 
         calculated from one or more other signals*/
     yearlySalary = computed(()=> this.basicSalary() * 12 );


     changeEmployeeName(){
       this.employeeName.set("Rebert.");
     }

     setSalary(){
      this.basicSalary.set(50000);
     }

     updateSalary(){
      this.basicSalary.update((currentSalary)=> currentSalary + 5000);
     }


}
