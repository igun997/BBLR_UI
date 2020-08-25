import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BblrDetailPage } from './bblr-detail';

@NgModule({
  declarations: [
    BblrDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BblrDetailPage),
  ],
})
export class BblrDetailPageModule {}
