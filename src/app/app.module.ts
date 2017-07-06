import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule}         from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {MagicDirectiveDirective} from './magic/src/ui/magic-directive.directive';
import {MagicModule} from "./magic/magic.core.module";
import {AppComponent} from './app.component';
import {Demo1Component} from "./demos/demo1.component";

@NgModule({
   declarations: [
      AppComponent,
      Demo1Component,
      MagicDirectiveDirective
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      JsonpModule,
      ReactiveFormsModule,

      MagicModule.forRoot()
   ],
   exports: [
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [],

   bootstrap: [AppComponent]
})
export class AppModule {
}
