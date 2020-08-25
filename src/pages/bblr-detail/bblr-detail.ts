import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Chart } from 'chart.js';
/**
 * Generated class for the BblrDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bblr-detail',
  templateUrl: 'bblr-detail.html',
})
export class BblrDetailPage {
  @ViewChild('priorityLength') priorityLength;
  @ViewChild('priorityDiameter') priorityDiameter;
  @ViewChild('priorityWeight') priorityWeight;
  chartPL: any;
  chartPD: any;
  chartPW: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BblrDetailPage');
  }
  ionViewDidEnter() {
    this.createBarChart();
  }

  createBarChart() {
    let labels = [];
    let ix = 0;
    for (let i = 22 ; i <= 50;i++){
      labels[ix++] = i;
    }
    this.chartPL = new Chart(this.priorityLength.nativeElement, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Panjang Bayi',
          data: [Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random()],
          backgroundColor: 'rgb(38, 194, 129)',
          fill:false,
          borderColor: 'rgb(38, 194, 129)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }, {
            stacked: true,
            position: "right",
          }]
        }
      }
    });
    this.chartPD = new Chart(this.priorityDiameter.nativeElement, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Diameter Kepala Bayi',
          data: [Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random()],
          backgroundColor: 'rgb(38, 194, 129)',
          fill:false,
          borderColor: 'rgb(38, 194, 129)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }, {
            stacked: true,
            position: "right",
          }]
        }
      }
    });
    this.chartPW = new Chart(this.priorityWeight.nativeElement, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Berat Bayi',
          data: [Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random()],
          backgroundColor: 'rgb(38, 194, 129)',
          borderColor: 'rgb(38, 194, 129)',
          fill:false,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }, {
            stacked: true,
            position: "right",
          }]
        }
      }
    });
  }
}
