import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  a:number;
  b:number;
  s:number;

  ras (a:string,b:string){
    this.a=parseInt(a);
    this.b=parseInt(b);
    this.s=0;
    for(let i=this.a;i<=this.b;i++){
      if ((i%17==0)&&(i%4==2))
      this.s+=i;
    
    }
  }
}

