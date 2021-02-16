import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.page.html',
  styleUrls: ['./indicators.page.scss'],
})
export class IndicatorsPage implements OnInit {

  public instruments = [
    // 1 - Pacientes
    // 2 - Cuidadores
    {
      instrument: 'barthel',
      title: 'Actividades Básicas de la vida diaria',
      current_value: 'Dependencia leve',
      toWhom: 1
    },
    {
      title: 'Actividades Instrumentales de la vida diaria',
      current_value: 'Dependencia moderada',
      toWhom: 1
    },
    {
      title: 'Equilibrio y marcha',
      current_value: 'Alto riesgo de caída',
      toWhom: 1
    },
    {
      title: 'Deterioro cognitivo',
      current_value: 'Deterioro leve',
      toWhom: 1
    },
    {
      title: 'Escala Zarit',
      current_value: 'Sobrecarga leve',
      toWhom: 2
    },
    {
      title: 'Escala HAD-A',
      current_value: 'Ansiedad moderada',
      toWhom: 2
    },
    {
      title: 'Escala CES-D',
      current_value: 'Depresión moderada',
      toWhom: 2
    },
  ];

  public instruments_selected = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.cambiarSegment(1);
  }

  segmentChanged(event){
    var valorSegmento = event.detail.value;
    this.cambiarSegment(valorSegmento);
  }

  cambiarSegment(valorSegmento: number){
    this.instruments_selected.length = 0;
    if (Number(valorSegmento) === 1){
      for (let i of this.instruments){
        if(i.toWhom === 1){
          this.instruments_selected.push(i);
        }
      }
    }else{
      for (let i of this.instruments){
        if(i.toWhom === 2){
          this.instruments_selected.push(i);
        }
      }
    }
  }

}
