import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BblrDetailPage} from "../bblr-detail/bblr-detail";
import {BblrFormPage} from "../bblr-form/bblr-form";

/**
 * Generated class for the BblrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bblr',
  templateUrl: 'bblr.html',
})
export class BblrPage {
  list_anak = []
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.list_anak = [
      {
        nama:"Cyntia Putri",
        id:2
      }, {
        nama:"Anandika Hasan",
        id:2
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BblrPage');
  }

  detail(number: number) {
    this.navCtrl.push(BblrDetailPage,{
      id:number
    })
  }

  add_stat(number: number) {
    this.navCtrl.push(BblrFormPage,{
      id:number,
      type:"stat"
    })
  }

  edit(number: number) {
    this.navCtrl.push(BblrFormPage,{
      id:number,
      type:"edit"
    })
  }

  add_anak() {
    this.navCtrl.push(BblrFormPage,{
      type:"add"
    })
  }

  add_berat(id: any) {
    this.navCtrl.push(BblrFormPage,{
      type:"berat"
    })
  }

  add_nutrisi(id: any) {
    
  }
}
