import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { HomePage } from '../pages/home/home';
import { LoginPage} from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AgreementPage } from '../pages/agreement/agreement';
import { FindPwdPage } from '../pages/find-pwd/find-pwd';
import { PublishPage } from '../pages/publish/publish';
import { TabsPage } from '../pages/tabs/tabs';
import { PublishInfoPage } from '../pages/publish-info/publish-info';
import { MinePage } from '../pages/mine/mine';
import { SettingPage } from '../pages/setting/setting';
import { MessagePage } from '../pages/message/message';
import { MessageInfoPage } from '../pages/message-info/message-info';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = TabsPage;
 
  
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
