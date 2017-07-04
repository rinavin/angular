import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseMagicComponent } from './app.baseMagicComponent';


declare var myExtObject: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})


export class AppComponent extends BaseMagicComponent implements OnInit {

  id: string;
  name: string;
  user: FormGroup;
  Myuser: User;
  list: any;
  cb = name => {
    return (<FormControl>this.user.controls[name]).value;
  }

  constructor(ref: ChangeDetectorRef) {
    super(ref);
  }

  ngOnInit() {

    this.user = new FormGroup({
      name: new FormControl(''),
      id: new FormControl(''),


    });
    this.initializeMagic();
  }

  GetValueCallback(): any {

    return (
      name => {
        var self = this;
        return (<FormControl>this.user.controls[name]).value;
      });
  }

  initializeMagic() {

    var self = this;
    //myExtObject.registerGetValueCallback(this.GetValueCallback());
    // name => {
    //   return (<FormControl>this.user.controls[name]).value;
    // });
    myExtObject.registerGetValueCallback(name => {
      return (<FormControl>this.user.controls[name]).value;
    });
    myExtObject.registerShowMessageBox(msg => {
      alert(msg);
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

  buttonClick(index: number, line: number ) {
 
    myExtObject.insertEvent("Click", index, line);
  }

  focusFunction(index: number) {
    myExtObject.insertEvent("Focus", index, 0);
  }


}
export interface User {
  id: string;
  name: string;

}