import { Component,  OnInit , ChangeDetectorRef } from '@angular/core';
import { MagichttpserviceService } from './magichttpservice.service';
//import 'external.js'
declare var myExtObject: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MagichttpserviceService]
})

export class AppComponent implements OnInit  {
  title = 'magic edit';
  mymodel = 'magic var';
  id :string;
  name : string;
  port: string ;
  start = 0;
  end = 0;
  secondUrl = '';
  url: string = 'http://rinav-7/MagicScripts33/MGrqispi.dll?APPNAME=prg&PRGNAME=q|rinav-7/1682&DEBUG_CLIENT=1';
  baseurl: string = 'http://rinav-7/MagicScripts33/MGrqispi.dll?APPNAME=prg&PRGNAME=q|rinav-7/';
  varA : string;
  varB : string;

  constructor(private httpService: MagichttpserviceService, private ref: ChangeDetectorRef) { }

 ngOnInit() {
   this.callMagic();
  }
  profile = '';

  

  callMagic() {

    var self = this;
    myExtObject.func4(data => 
    {var obj = JSON.parse(data);  
    self.id = obj[1].Value;
    self.name = obj[3].Value;
    self.ref.detectChanges();
    });
  }

  buttonClick(index: number) {
    //alert(index.toString());
    myExtObject.buttonClick(index);
  }
 asyncDivOk()
{
  this.port = "22";
   myExtObject.func1();
    var call = "Async call (Divide 16 / 2): " + Date();
    // boundAsync.div(16, 2).then(function (res)
    // {
    //     var end = "Result: " + res + "(" + Date() + ")";
    //     alert(end);
    //     //writeAsyncResult(call, end);
    // });
}
  testCallback()
  {
     var self = this;
    myExtObject.func3(()=>
    {
      self.port = "33";
      self.ref.detectChanges();

    alert( this.port);}
     );
  }

  getDummyData(data: string)
  {
  
    alert(data);
     this.port = "33";
  }
  getData(data: string)
  {
    //alert("Wow");
    //alert(data);
    var obj = JSON.parse(data);
   
    
    this.port = obj[1].Value;
    // this.port = "44";
    alert(this.port);
    
  }

  testJson() {

    this.url = '/variables.json';
    this.httpService.callJson(this.url).subscribe(data => this.parseJson(data));
  }


  //   loadUser() {
  //     this.httpService.getUser().subscribe(
  //       data => 
  //       this.mymethod(data)
  //       //this.profile.search("MagicScripts33");

  //       );


  //   }

  parseJson(data: any): any {
   // var result = data.json();
    this.varA = data.aa.Val;
    this.varB = data.bb.Val;
  }

  mymethod(data: any): any {
    console.log("aaa");
    this.profile = data;
    this.start = this.profile.search("&CTX");
    this.end = this.profile.search("SESSION=1");
    this.secondUrl = this.profile.substr(this.start, this.end - this.start);
    this.secondUrl = 'http://rinav-7/MagicScripts33/MGrqispi.dll?APPNAME=prg' + this.secondUrl + 'SESSION=1';
    this.httpService.callJson(this.secondUrl).subscribe(data => this.parseJson(data));
    //this.httpService.callUrl(this.secondUrl).subscribe(data => { this.profile = data });

  }

}
