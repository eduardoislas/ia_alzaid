import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndicatorsPage } from './indicators.page';

const routes: Routes = [
  {
    path: '',
    component: IndicatorsPage
  },
  {
    path: 'instrument',
    loadChildren: () => import('./instrument/instrument.module').then( m => m.InstrumentPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndicatorsPageRoutingModule {}
