import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibreriaComponent } from './data/libreria/libreria.component';
import { LibrosComponent } from './data/libros/libros.component';
import { PlanillaComponent } from './data/planilla/planilla.component';

const routes: Routes = [

// CONSULTAR

  { path: 'libros-component', 
    component: LibrosComponent },
  { path: 'planilla-component',
    component: PlanillaComponent,

  },
  
  //{ path: '', redirectTo: 'planilla-component', pathMatch: 'full' },
  //{ path: '**', component: PlanillaComponent } //entra cuando no coincide ninguna ruta
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
