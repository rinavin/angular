import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



declare var myExtObject: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})


export class AppComponent implements OnInit {

  id: string;
  name: string;
  user: FormGroup;
  Myuser: User;
   list: any;

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {

    this.user = new FormGroup({
      name: new FormControl(''),
      id: new FormControl(''),


    });
    this.initializeMagic();
  }

  initializeMagic() {

    var self = this;
    myExtObject.registerGetValueCallback(name => {
      return (<FormControl>this.user.controls[name]).value;
    });
    myExtObject.registerRefreshUI(data => {
      var obj = JSON.parse(data);
      //alert(data);
      // self.id = obj[1].Value;
      // self.name = obj[3].Value;
      (<FormControl>this.user.controls['id'])
        .setValue(obj[1].Value, { onlySelf: true });
      (<FormControl>this.user.controls['name'])
        .setValue(obj[3].Value, { onlySelf: true });
      self.ref.detectChanges();
    }
    );
    myExtObject.registerRefreshTableUI(data => {
       this.list = JSON.parse(data);
       self.ref.detectChanges();
     // alert(this.list);
      // self.id = obj[1].Value;
      // self.name = obj[3].Value;
      // (<FormControl>this.user.controls['id'])
      //   .setValue(obj[1].Value, { onlySelf: true });
      // (<FormControl>this.user.controls['name'])
      //   .setValue(obj[3].Value, { onlySelf: true });
      // self.ref.detectChanges();
    }
    );

    myExtObject.startMagic();
  }

  buttonClick(index: number) {

    myExtObject.insertEvent("Click", index, 0);
  }

  focusFunction(index: number) {
    myExtObject.insertEvent("Focus", index, 0);
  }


}
export interface User {
  id: string;
  name: string;

}