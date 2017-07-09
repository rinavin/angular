import {Component} from "@angular/core";
import {BaseTaskMagicComponent} from "../magic/src/ui/app.baseMagicComponent";
import {FormGroup} from "@angular/forms";


@Component({
   selector: 'demo2',
   template: `
      demo2
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
      <innercomponent [subformName]=subform1Name [parentId]=taskId></innercomponent>
   `
})
export class  Demo2Component extends BaseTaskMagicComponent{
   subform1Name: string = "subform1Name";
   get user(): FormGroup{
      return this.record;
   }

}

