import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthProvider} from "../../providers/auth/auth";
import {HomePage} from "../home/home";

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
  username:string = ''
  password:string = ''
  constructor(public navCtrl: NavController, public navParams: NavParams,private auth:AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
    console.log(this.password);
    console.log(this.username);
    this.auth._setLogin(true);
    this.navCtrl.push(HomePage);
  }
  ionViewWillEnter(){
    console.log("Enter")
    this.auth._setLogin(false);
  }

}
