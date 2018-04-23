import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { FindPwdPage } from '../find-pwd/find-pwd';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  registerPage:RegisterPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    
  }
  goRegister(event){
    this.navCtrl.push(RegisterPage,{});
  }
  goIndex(event){
    this.navCtrl.push(TabsPage,{});
  }
  goFindPwd(){
    this.navCtrl.push(FindPwdPage);
  }

}
