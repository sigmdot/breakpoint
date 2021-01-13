import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { HomeComponent } from './views/home/home.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './components/general/sidenav/sidenav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatchmakingcardComponent } from './components/home/matchmakingcard/matchmakingcard.component';
import { CoreModule } from '../core/core.module';
import { MatchComponent } from './views/match/match.component';

@NgModule({
  declarations: [
    UsuarioComponent,
    HomeComponent,
    SidenavComponent,
    MatchmakingcardComponent,
    MatchComponent,
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    MatSidenavModule,
    FontAwesomeModule,
    CoreModule,
  ],
})
export class UsuarioModule {}
