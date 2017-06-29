import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';



declare var myExtObject: any;



export class BaseMagicComponent implements OnInit {



  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
    
    
    //this.initializeMagic();
  }

  initializeMagic() {

    var self = this;
   
    // myExtObject.startMagic(data => {
    //   var obj = JSON.parse(data);
    //   //alert(data);
    //  // self.id = obj[1].Value;
    //  // self.name = obj[3].Value;
    // //    (<FormControl>this.user.controls['id'])
    // // .setValue(obj[1].Value, { onlySelf: true });
    // //  (<FormControl>this.user.controls['name'])
    // // .setValue(obj[3].Value, { onlySelf: true });
    //   self.ref.detectChanges();
    // }
    // );
  }

  buttonClick(index: number) {
   
     myExtObject.buttonClick(index);
  }
}
