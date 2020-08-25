import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BeritaDetailPage} from "../berita-detail/berita-detail";

/**
 * Generated class for the BeritaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-berita',
  templateUrl: 'berita.html',
})
export class BeritaPage {
  listBerita = []
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let dummy = [
      {
        src:"https://via.placeholder.com/400x200",
        title:"Metode kanguru",
        description:"adalah perawatan bayi dengan berat badan lahir rendah yang dilakukan dari kulit-ke-kulit oleh ibu/suami. ...",
        id:1
      },{
        src:"https://via.placeholder.com/400x200",
        title:"Nutrisi kebutuhan BBLR",
        description:"Kebutuhan ASI pada bayi dengan berat badan > 2000 gram ...",
        id:1
      }
    ]
    this.listBerita = dummy;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeritaPage');
  }

  link(id){
    console.log(id)
    this.navCtrl.push(BeritaDetailPage,{id:id});
  }

}
