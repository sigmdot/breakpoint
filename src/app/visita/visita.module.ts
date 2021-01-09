import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitaRoutingModule } from './visita-routing.module';
import { VisitaComponent } from './visita.component';
import { RegistroComponent } from './views/registro/registro.component';
import { LoginComponent } from './views/login/login.component';


@NgModule({
  declarations: [VisitaComponent, RegistroComponent, LoginComponent],
  imports: [
    CommonModule,
    VisitaRoutingModule
  ]
})
export class VisitaModule { }
