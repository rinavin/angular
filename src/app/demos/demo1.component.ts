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
               magic="id"
               formControlName="id"
               >
         </label>
         <br>
         <label>
            <span>Name:</span>
            <input
               type="text"
               magic="name"
               formControlName="name"
               >
         </label>
         <button magic="nextb" >Next</button>
         <button magic="prevb" >Prev</button>
      </form>
   `
})
export class  Demo1Component extends BaseTaskMagicComponent{

   get user(): FormGroup{
      return this.record;
   }
}

