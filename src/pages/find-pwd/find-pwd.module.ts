import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindPwdPage } from './find-pwd';

@NgModule({
  declarations: [
    FindPwdPage,
  ],
  imports: [
    IonicPageModule.forChild(FindPwdPage),
  ],
})
export class FindPwdPageModule {}
