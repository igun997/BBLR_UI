import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BeritaDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-berita-detail',
  templateUrl: 'berita-detail.html',
})
export class BeritaDetailPage {
  detailBerita:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.detailBerita = {
      title:"Detail Berita",
      content:"Description",
      image:"https://via.placeholder.com/400x200",
      video:"http://techslides.com/demos/sample-videos/small.mp4",
      featuredHeader:"video"
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeritaDetailPage');
  }

  ionViewWillEnter(){
    console.log("Reload")
    let data = this.navParams.data;
    console.log(data)

  }

}
