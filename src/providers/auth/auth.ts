import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HomePage} from "../../pages/home/home";
import {LoginPage} from "../../pages/login/login";
import {RegisterPage} from "../../pages/register/register";
import {BeritaPage} from "../../pages/berita/berita";
import {BblrPage} from "../../pages/bblr/bblr";
import {LogoutPage} from "../../pages/logout/logout";

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  isLogin:boolean = false;
  tabs = [];
  onLoggedIn = [];
  onLoggedOut = [];
  constructor(public http: HttpClient) {
    this.tabs = [
      {
        label:"Login",
        root:LoginPage,
        icon:"log-in",
        show:false,
        id:"login"
      },{
        label: "Register",
        root: RegisterPage,
        icon: "create",
        show:false,
        id:"register"
      },{
        label:"Home",
        root:HomePage,
        icon:"home",
        show:false,
        id:"home"
      },{
        label:"Tips",
        root:BeritaPage,
        icon:"calendar",
        show:false,
        id:"berita"
      },{
        label:"BBLR",
        root:BblrPage,
        icon:"stats",
        show:false,
        id:"bblr"
      },{
        label:"Logout",
        root:LogoutPage,
        icon:"log-out",
        show:false,
        id:"logout"
      }
    ];
    this.onLoggedIn = [
      "home",
      "logout",
      "bblr",
      "berita",
    ]
    this.onLoggedOut = [
      "login",
      "register"
    ]
  }
  _setLogin(value){
    this.isLogin = value;
  }
  isAuth():boolean {
    return  this.isLogin;
  }

  getActiveMenus(){
    this.tabs.forEach(value => {
      value.show = false;
    })
    if (this.isLogin){
      this.tabs.forEach(value => {
        this.onLoggedIn.forEach(v=>{
          if (v == value.id){
            value.show = true;
            return;
          }
        })
      });
    }else{
      this.tabs.forEach(value => {
        this.onLoggedOut.forEach(v=>{
          if (v == value.id){
            value.show = true;
            return;
          }
        })
      });
    }
    return this.tabs;
  }


}
