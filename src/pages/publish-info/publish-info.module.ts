import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublishInfoPage } from './publish-info';

@NgModule({
  declarations: [
    PublishInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(PublishInfoPage),
  ],
})
export class PublishInfoPageModule {}
