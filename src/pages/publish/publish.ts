import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PublishInfoPage } from '../publish-info/publish-info';

/**
 * Generated class for the PublishPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-publish',
  templateUrl: 'publish.html',
})
export class PublishPage {
  tabRoot1 = HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublishPage');
  }
  goInfo(){
    this.navCtrl.push(PublishInfoPage,{});
  }
}
