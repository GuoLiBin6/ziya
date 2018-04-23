import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MessageInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message-info',
  templateUrl: 'message-info.html',
})
export class MessageInfoPage {
  obj:null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.obj = navParams.get('item');
    console.log('a'+this.obj);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessageInfoPage');
  }
  goBack(){
    this.navCtrl.pop();
  }
}
