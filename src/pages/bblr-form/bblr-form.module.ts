import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BblrFormPage } from './bblr-form';

@NgModule({
  declarations: [
    BblrFormPage,
  ],
  imports: [
    IonicPageModule.forChild(BblrFormPage),
  ],
})
export class BblrFormPageModule {}
