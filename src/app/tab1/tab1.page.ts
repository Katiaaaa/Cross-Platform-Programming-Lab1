import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  a:number;
  b:number;
  c:number;
  d:number;

  ras (a:string,b:string,c:string){
    this.a=parseFloat(a);
    this.b=parseFloat(b);
    this.c=parseFloat(c);
    this.d=0;
    if (this.a%27==0)
      this.d+=1;
    else
      if (this.c%27==0)
      this.d+=1;
    else
      if (this.b%27==0)
        this.d+=1;
  }
}
