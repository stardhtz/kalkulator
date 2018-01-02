import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public number1: number;
  public number2: number;
  public operator: string;
  public result: number;
  public dataList: Array<any>;
  public list: {
    id: number,
    number1: number,
    operator: string,
    number2: number,
    result: number
  };
  title = 'app';

  constructor() {
    this.number1 = null;
    this.operator = '+';
    this.number2 = null;
    this.result = null;
    this.dataList = new Array();
    this.list = {
      id: null,
      number1: null,
      operator: null,
      number2: null,
      result: null
    };

  }

  ngOnInit() {

  }

  delete(index) {
    this.dataList.splice(index, 1);
  }

  addList() {
    let id = 0;
    if (!this.dataList.length) {
      id = 1;
    } else {
      id = this.dataList.length + 1;
    }
    this.list = {
      id: id,
      number1: this.number1,
      operator: this.operator,
      number2: this.number2,
      result: this.result
    };
    this.dataList.push(this.list);
    console.log(this.dataList);
  }

  calc() {
    console.log(this.number1);
    console.log(this.operator);
    console.log(this.number2);
    if (this.operator === '+') {
      this.result = this.number1 + this.number2;
    } else if (this.operator === '-') {
      this.result = this.number1 - this.number2;
    } else if (this.operator === 'x') {
      this.result = this.number1 * this.number2;
    } else {
      this.result = this.number1 / this.number2;
    }
  }

  getOp(val) {
    this.operator = val;
    this.calc();
  }


}
