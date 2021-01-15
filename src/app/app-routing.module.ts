import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedUserGuard } from './guards/loggedUser/logged-user.guard';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLanding = () => redirectUnauthorizedTo(['/login']);

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./visita/visita.module').then(module => module.VisitaModule),
    canActivate: [LoggedUserGuard]
  },
  {
    path:'matchmaking',
    loadChildren: () => import('./usuario/usuario.module').then(module => module.UsuarioModule),
    canActivate:[AngularFireAuthGuard],
    data: {authGuardPipe:redirectUnauthorizedToLanding}
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
