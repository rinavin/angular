import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule}         from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {MagicDirectiveDirective} from './magic/src/ui/magic-directive.directive';
import {MagicModule} from "./magic/magic.core.module";
import {AppComponent} from './app.component';
import {Demo1Component} from "./demos/demo1.component";
import {InnerComponent} from "./demos/inner.component";
import {Demo2Component} from "./demos/demo2.component";

@NgModule({
   declarations: [
      AppComponent,
      Demo1Component,
      Demo2Component,
      MagicDirectiveDirective,
      InnerComponent
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
   constructor()
   {

   }
}
