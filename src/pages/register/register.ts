import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  register_user = {
    bb_anak: "",
    tgl_lhr_anak: "",
    jk_anak: "",
    nama_anak: "",
    password: "",
    email: "",
    phone: "",
    username: "",
    name: "",
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(){
    let build = this.register_user;
    alert(build.nama_anak);
    console.log(build)
  }

}
