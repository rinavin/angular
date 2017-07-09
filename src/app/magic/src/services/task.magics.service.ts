import {Injectable} from "@angular/core";
import {MagicEngine} from "./magic.engine";
import {FormControl, FormGroup} from "@angular/forms";

@Injectable()
export class TaskMagicService {

   taskId      : number;
   selectedRow : number;
   // row         : FormGroup;
   rows        : FormGroup[] = [];

   constructor(protected magic: MagicEngine) {
      this.buildRecords();
   }


   buildRecords(){
      this.rows.push(new FormGroup({
         name: new FormControl(''),
         id: new FormControl(''),
      }))
   }

   startMagic() {
      this.magic.startMagic();
   }

   insertEvent(eventName:string, controlIdx:string, lineidx:number){
      this.magic.insertEvent(eventName, controlIdx, lineidx);
   }

   registerGetValueCallback(cb) {
      this.magic.registerGetValueCallback(cb);
   }

   registerRefreshUI(cb) {
      this.magic.registerRefreshUI(cb);
   }

   registerRefreshTableUI(cb) {
      this.magic.registerRefreshTableUI(cb);
   }

   registerShowMessageBox(cb) {
      this.magic.registerShowMessageBox(cb);
   }

}
