import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessageInfoPage } from '../message-info/message-info';

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }
  messageArr = [
    {
      'imgURL':'assets/imgs/mineHead.png',
      'title':'阿里阿',
      'content':'bv',
      'time':'3:00'
    },
    {
      'imgURL':'assets/imgs/mineHead.png',
      'title':'嘻嘻哈',
      'content':'嗷嗷嗷啊',
      'time':'5:00'
    },
    {
      'imgURL':'assets/imgs/mineHead.png',
      'title':'哦哈',
      'content':'33333',
      'time':'7:00'
    }
  ]
  goMessageInfo(item){
    // console.log(item);
    this.navCtrl.push(MessageInfoPage,{item:item});
  }
}
