import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('priorityLength') priorityLength;
  @ViewChild('priorityDiameter') priorityDiameter;
  @ViewChild('priorityWeight') priorityWeight;
  chartPL: any;
  chartPD: any;
  chartPW: any;
  colorArray: any;
  constructor(public navCtrl: NavController) {

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
