import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-converter',
  templateUrl: 'converter.html'
})
export class ConverterPage {
  result: number = 0;

  constructor(public navCtrl: NavController) {
  
  }
  
  btnClicked(btn){ 
    if (btn == 'C') {
      this.result = 0;
    }else if (btn == 'IncCen') {
      this.result = this.result/0.39370;
    }
    else if (btn == 'YarMet') {
      this.result = this.result/1.0936;
    }
    else if (btn == 'MilKil') {
      this.result = this.result/0.62137; 
    } else {
      if (this.result == 0){
        this.result = btn;
      }else{
        this.result += btn;
      }
    }
  }
}