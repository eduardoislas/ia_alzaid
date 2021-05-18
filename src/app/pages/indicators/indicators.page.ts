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
      instrument: 'Barthel',
      title: 'Actividades Básicas de la vida diaria',
      current_value: 'Dependencia leve',
      value: 1,
      toWhom: 1
    },
    {
      instrument: 'Lawton y Brody',
      title: 'Actividades Instrumentales de la vida diaria',
      current_value: 'Dependencia moderada',
      value: 2,
      toWhom: 1
    },
    {
      instrument: 'Tinetti',
      title: 'Equilibrio y marcha',
      current_value: 'Alto riesgo de caída',
      value: 3,
      toWhom: 1
    },
    {
      instrument: 'MMSE',
      title: 'Deterioro cognitivo',
      current_value: 'Deterioro leve',
      value: 1,
      toWhom: 1
    },
    {
      title: 'Escala Zarit',
      current_value: 'Sobrecarga leve',
      value: 1,
      toWhom: 2
    },
    {
      title: 'Escala HAD-A',
      current_value: 'Ansiedad moderada',
      value: 2,
      toWhom: 2
    },
    {
      title: 'Escala CES-D',
      current_value: 'Depresión moderada',
      value: 2,
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

//   Opción de menú
//   {
//     "icon": "options",
//     "name": "Indicadores",
//     "redirectTo": "indicators"
// },
}
