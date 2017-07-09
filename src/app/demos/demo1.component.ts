import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";
import { FormGroup } from "@angular/forms";
//import { PropType } from "../magic/src/ui/propType";


@Component({
      selector: 'demo1',
      template: `
      <form novalidate [formGroup]="user">
         <label>
            <span>{{GetProperty('idlabel', 19)}}</span>
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
export class Demo1Component extends BaseTaskMagicComponent {


      get user(): FormGroup {
            return this.record;
      }

      GetProperty(controlId: string, propertyType: number): string {
            
          //TODO : use property enum
            //console.log("Value = " + this.props[controlId][propertyType]);
            return this.props['idlabel'][propertyType];
      }




}
export enum PropType {
   Text = 19,
}


