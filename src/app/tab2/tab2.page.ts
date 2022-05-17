import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  a:number[][]=[];
  n:number;
  constructor(){}
  getRandomInt(max:number) {  return Math.floor(Math.random() * max);  }
  arrayras(n:string)
  {
    this.n=parseInt(n);
    let i:number=0,j:number=0;
    this.a=Array(this.n);
    console.log("Array created");
    for (i=0;i<this.n;i++)
    {
      this.a[i]=Array(this.n);
      for (j=0;j<this.n;j++){
        this.a[i][j]=this.getRandomInt(10);
      }

    }
    
    
  }
  getColor (b:number)
    { 
      return (b%2==0) ? '#77BCFA' : '#D7E7EE';}
  sum (i:number[]){
    let s:number=0;
      for (let j=0;j<i.length;j++){
        s=s+i[j];
      }
    return s;  
  }  

  

    
    
   



}
