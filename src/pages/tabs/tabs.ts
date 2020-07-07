import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import {LoginPage} from "../login/login";
import {RegisterPage} from "../register/register";
import {AuthProvider} from "../../providers/auth/auth";
import {NavController} from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homePage = HomePage;
  loginPage = LoginPage;
  registerPage = RegisterPage;
  authFlag:AuthProvider;
  tabList = [];
  constructor(public auth:AuthProvider,public navCtrl: NavController) {
    this.authFlag = auth;

  }
  logout(){
    this.auth._setLogin(false);
    this.navCtrl.push(LoginPage);
  }

}
