import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DensidadSiembraPage } from './densidad-siembra.page';

const routes: Routes = [
  {
    path: '',
    component: DensidadSiembraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DensidadSiembraPageRoutingModule {}
