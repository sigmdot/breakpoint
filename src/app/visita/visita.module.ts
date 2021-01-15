import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitaRoutingModule } from './visita-routing.module';
import { VisitaComponent } from './visita.component';
import { RegistroComponent } from './views/registro/registro.component';
import { LoginComponent } from './views/login/login.component';
import { CoreModule } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModulesModule } from '../shared/modules/modules.module';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [VisitaComponent, RegistroComponent, LoginComponent],
  imports: [CommonModule, VisitaRoutingModule, CoreModule, ModulesModule, ReactiveFormsModule,
    FormsModule],
})
export class VisitaModule { }
