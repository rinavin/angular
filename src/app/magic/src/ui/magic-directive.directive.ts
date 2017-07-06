import { Directive, ElementRef, Input, Output,OnInit } from '@angular/core';
import {TaskMagicService} from "../services/task.magics.service";
import {FormControlName} from "@angular/forms";

@Directive({
   selector: '[magic]'
})
export class MagicDirectiveDirective implements OnInit{


   @Input('magic') id: string;
   @Input() rowId: number = 0;
   @Input() events: any[] = [];


   constructor(
      private element: ElementRef,
      private task: TaskMagicService
   ) {

   }

   ngOnInit(): void {

      let htmlElement:HTMLElement = this.element.nativeElement;

      console.log('this.element.nativeElement', this.element.nativeElement);

      htmlElement.addEventListener('focus',(event)=>{
         console.log('focus');
         this.task.insertEvent('focus', this.id, this.rowId);
      });


      htmlElement.addEventListener('click',(event)=>{
         console.log('click');
         this.task.insertEvent('click', this.id, this.rowId);
      });



      // switch(htmlElement.tagName){
      //   case 'button':
      //     //this.task.insertEvent('click', this.id, this.rowId);
      //     break;
      // }
   }

}
