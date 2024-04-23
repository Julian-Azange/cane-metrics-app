import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'densidad-siembra',
    pathMatch: 'full'
  },
  {
    path: 'densidad-siembra',
    loadChildren: () => import('./densidad-siembra/densidad-siembra.module').then( m => m.DensidadSiembraPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
