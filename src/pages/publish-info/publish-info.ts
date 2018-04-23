import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PublishPage } from '../publish/publish';

/**
 * Generated class for the PublishInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-publish-info',
  templateUrl: 'publish-info.html',
})
export class PublishInfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublishInfoPage');
  }
  goBack(event){
    this.navCtrl.pop();
  }
}
