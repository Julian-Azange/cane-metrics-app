import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DensidadSiembraPageRoutingModule } from './densidad-siembra-routing.module';

import { DensidadSiembraPage } from './densidad-siembra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DensidadSiembraPageRoutingModule
  ],
  declarations: [DensidadSiembraPage]
})
export class DensidadSiembraPageModule {}
