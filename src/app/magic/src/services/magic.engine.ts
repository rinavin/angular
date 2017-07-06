/**
 * Created by rinav on 05/07/2017.
 */
import {Injectable} from "@angular/core";

// export interface MagicCallBack{
//    ():void;
// }


@Injectable()
export class MagicEngine{
   magic = window['magic1'];
   //magic = window.magic1;

   startMagic() {
      // alert('function 4 called');
      // func = cb;
      this.magic.start();
   }

   insertEvent(eventName, controlIdx, lineidx) {
      console.log(eventName,controlIdx, lineidx);
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
