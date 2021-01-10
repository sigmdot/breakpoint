import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { HomeComponent } from './views/home/home.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from './components/general/sidenav/sidenav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [UsuarioComponent, HomeComponent, SidenavComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    MatSidenavModule,
    FontAwesomeModule
  ]
})
export class UsuarioModule { }
