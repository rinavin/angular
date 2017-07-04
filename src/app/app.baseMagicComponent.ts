import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

declare var myExtObject: any;

export abstract class BaseMagicComponent implements OnInit {


constructor(protected ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.initializeMagic();
  }


  initializeMagic() {
    myExtObject.registerGetValueCallback(this.GetValueCallback());
  }

  abstract GetValueCallback(): any;


}
