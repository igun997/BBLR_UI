import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BblrFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bblr-form',
  templateUrl: 'bblr-form.html',
})
export class BblrFormPage {
  type : string;
  id : number;
  name: any;
  tgl_lhr: any;
  berat_badan: any;
  panjang_naka: any;
  lingkar_kepala: any;
  jk: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BblrFormPage');
  }
  ionViewWillEnter(){
    this.type = this.navParams.get("type");
    this.id = this.navParams.get("id");
  }



  add_anak() {

  }

  edit() {

  }

  add_stat() {

  }

  add_berat() {

  }
}
