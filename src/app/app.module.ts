import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list'; 
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage} from '../pages/register/register';
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

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    HomePage,
    LoginPage,
    RegisterPage,
    AgreementPage,
    FindPwdPage,
    PublishPage,
    TabsPage,
    PublishInfoPage,
    MinePage,
    SettingPage,
    MessagePage,
    MessageInfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages:true
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    HomePage,
    LoginPage,
    RegisterPage,
    AgreementPage,
    FindPwdPage,
    PublishPage,
    TabsPage,
    PublishInfoPage,
    MinePage,
    SettingPage,
    MessagePage,
    MessageInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
