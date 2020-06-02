import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibreriaComponent } from './data/libreria/libreria.component';
import { LibrosComponent } from './data/libros/libros.component';
import { TablaComponent } from './data/tabla/tabla.component';
import { PlanillaComponent } from './data/planilla/planilla.component';

@NgModule({
  declarations: [
    AppComponent,
    LibreriaComponent,
    LibrosComponent,
    TablaComponent,
    PlanillaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
