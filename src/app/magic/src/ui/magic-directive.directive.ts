import { Directive, ElementRef, Input, Output,OnInit } from '@angular/core';
import {TaskMagicService} from "../services/task.magics.service";
import {FormControl, FormControlName} from "@angular/forms";

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
      //if (htmlElement instanceof  HTMLInputElement  ){
      //   (<HTMLInputElement >htmlElement).property




      // switch(htmlElement.tagName){
      //   case 'button':
      //     //this.task.insertEvent('click', this.id, this.rowId);
      //     break;
      // }
   }

}
