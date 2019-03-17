import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { NewPage } from '../new/new';
import { NextPage } from '../next/next';
import { SlidesPage } from '../slides/slides';
import { CustomerPage } from '../customer/customer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  gotoAbout(){
    this.navCtrl.push(AboutPage);
  }
  gotoNew(){
    this.navCtrl.push(NewPage);
  }
  gotoNext(){
    this.navCtrl.push(NextPage);
  }
  gotoSlides(){
    this.navCtrl.push(SlidesPage);
  }
  gotoCustomer(){
    this.navCtrl.push(CustomerPage);
  }
}
