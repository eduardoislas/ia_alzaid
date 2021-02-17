import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Storage } from '@ionic/storage';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: User = new User();
  segment: Boolean = true;
  // @ViewChild('barCanvas') barCanvas: ElementRef;

  // private barChart: Chart;
  // bars: Chart;
  // colorArray: any;

  constructor(private storage: Storage) {
    this.storage.get('usuario').then((val) => {
      this.user = val;
    })
   }

   ngOnInit() {
    this.cambiarSegment(1);
  }

  segmentChanged(event){
    var valorSegmento = event.detail.value;
    this.cambiarSegment(valorSegmento);
  }

  cambiarSegment(valorSegmento: number){
    if (Number(valorSegmento) === 1){
      this.segment = true;
    }else{
      this.segment = false;
    }
  }

  // ionViewDidEnter() {
  //   this.createBarChart();
  // }

  // createBarChart() {
  //   this.barChart = new Chart(this.barCanvas.nativeElement, {
  //     type: 'bar',
  //     data: {
  //       labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
  //       datasets: [{
  //         label: 'Viewers in millions',
  //         data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
  //         backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
  //         borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //       scales: {
  //         yAxes: [{
  //           ticks: {
  //             beginAtZero: true
  //           }
  //         }]
  //       }
  //     }
  //   });
  // }

}
