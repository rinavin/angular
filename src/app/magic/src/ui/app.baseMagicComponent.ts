import {Component, OnInit, ChangeDetectorRef, Input, Injectable} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TaskMagicService} from "../services/task.magics.service";
import {MagicEngine} from "../services/magic.engine";

@Component({
   selector: 'task-magic',
   providers: [TaskMagicService]
})
export abstract class BaseTaskMagicComponent implements OnInit {

   controlId: number;

   /*get rowId(){
    return this.task.rowId;
    }*/

   get table(){ return this.task.rows; }
   get record(){ return this.task.rows[0]; }

   //items: FormGroup;
   taskId: number;

   constructor(
      protected ref: ChangeDetectorRef,
      protected task: TaskMagicService,
      //protected magic:MagicEngine

   ) {
      debugger;
   }

   ngOnInit() {

      this.task.registerGetValueCallback((controlKey:string) => {
         console.log('registerGetValueCallback', controlKey);
         return this.record.get(controlKey).value;
      });

      this.task.registerShowMessageBox(msg => {
         alert(msg);
      });
      this.task.registerRefreshUI(data => {

            var obj = JSON.parse(data);
            console.dir(obj);
            this.record.patchValue(obj);
         }
      );
      // this.task.registerRefreshTableUI(data => {
      //       // this.list = JSON.parse(data);
      //       // self.ref.detectChanges();
      //       // alert(this.list);
      //       // self.id = obj[1].Value;
      //       // self.name = obj[3].Value;
      //       // (<FormControl>this.user.controls['id'])
      //       //   .setValue(obj[1].Value, { onlySelf: true });
      //       // (<FormControl>this.user.controls['name'])
      //       //   .setValue(obj[3].Value, { onlySelf: true });
      //       // self.ref.detectChanges();
      //    }
      // );

      this.task.startMagic();


   }


   initializeMagic() {
      //myExtObject.registerGetValueCallback(this.GetValueCallback.bind(this));
   }

   GetValueCallback(taskId: number, controlId: string, rowId: number = 0): any {
      return
   }
}