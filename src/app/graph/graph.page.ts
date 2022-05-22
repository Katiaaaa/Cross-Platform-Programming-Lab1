import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Chart, registerables} from 'chart.js';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
})
export class GraphPage implements OnInit {
  @ViewChild('lineCanvas') private lineCanvas : ElementRef;
  lineChart: any;

  xn: number;
  xk: number;
  h: number;
  a: number;
  xx: string[];
  yy: number[];
  data1: string[];

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit() {}
  lineChartMethod() {
    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: this.xx,
        datasets: [
          {
            label: 'Графік функції',
            fill: false,
            borderColor: 'rgba(75,192,192,1)',
            borderDashOffset: 0.0,
            pointRadius: 1,
            data: this.yy,
            spanGaps: false,
          },
        ],
      },
    });
  }


  graphras(xn: string, xk: string, a: string, h: string) {
    this.data1 = [];
    this.xn = parseFloat(xn);
    this.xk = parseFloat(xk);
    this.a = parseFloat(a);
    this.h = parseFloat(h);
    let x: number,
      y: number,
      i: number = 0;
    x = this.xn;
    this.xx = new Array();
    this.yy = new Array();
    while (x < this.xk) {
      if (x <= 0) {
        y = Math.cos(x*x*x-4*x+4)/(x*x*x-Math.log(Math.abs(x)+1));
      } else if (x <= this.a) {
        y = Math.sin(x*x +4*x+4)/ Math.pow(2*x*x+x*x*x*x+1, 1/3);
      } else {
        y =  Math.sqrt(Math.pow(Math.abs(x),3)) * Math.sin(x*x*x)/Math.pow(Math.cos(x+1),2);
      }
      this.xx.push(x.toFixed(1));
      this.yy.push(parseFloat(y.toFixed(1)));
      let s = 'x= ' + x.toFixed(1) + ' y=' + y.toFixed(1);
      this.data1.push(s);
      x = x + this.h;
    }
    this.lineChartMethod();
  }
}