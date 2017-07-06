import {Component} from "@angular/core";
import {BaseTaskMagicComponent} from "../magic/src/ui/app.baseMagicComponent";
import {FormGroup} from "@angular/forms";


@Component({
   selector: 'demo1',
   template: `
      <form novalidate [formGroup]="user">
         <label>
            <span>Id:</span>
            <input
               type="text"
               magic="1"
               formControlName="id"
               >
         </label>
         <br>
         <label>
            <span>Name:</span>
            <input
               type="text"
               magic="3"
               formControlName="name"
               >
         </label>
         <button magic="4" >Next</button>
         <button magic="5" >Prev</button>
      </form>
   `
})
export class  Demo1Component extends BaseTaskMagicComponent{

   get user(): FormGroup{
      return this.record;
   }
}

