import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
})
export class AbstractClassPage implements OnInit {
  buildings: Building[];
  max: number;
  constructor() {}

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  ras(nn: string) {
    this.buildings = [];
    let n = parseInt(nn);
    for (let i = 0; i < 2 * n; i++) {
      this.buildings.push(
        new Office(
          'Office',
          this.getRandomInt(100)
        )
      );
      this.buildings.push(
        new Plant('Plant', this.getRandomInt(100))
      );
    }
    this.max = 0;
    this.buildings.forEach((elem) => {
      elem.height();
      if (this.max < elem.heightt) {
        this.max = elem.heightt;
      }
      console.log(elem.show());
    });
    console.log(this.max);
  }

  getColor(elem: number) {
    return Math.abs(elem - this.max) < 0.0000001 ? 'green' : '';
  }

  ngOnInit() {}
}

abstract class Building {
  name: string;
  numberOfFloors: number;
  heightt: number;
  constructor(nam: string, floors: number) {
    this.name = nam;
    this.numberOfFloors = floors;
  }
  show() {
    return (
      this.name + " -> "+ this.numberOfFloors + " поверхів " + " Висота фундаменту=" + this.heightt.toFixed(7)
    );
  }
  abstract height();
}

class Office extends Building {
  
  constructor(
    public name: string,
    public numberOfFloors: number
    
  ) {
    super(name, numberOfFloors);
  }
  height() {
    this.heightt = this.numberOfFloors * 0.05;
  }
}

export class Plant extends Building {

  constructor(
    public name: string, public numberOfFloors: number
  ) {
    super(name, numberOfFloors);
  }
  height() {
    this.heightt = this.numberOfFloors * 0.000002;
  }
}