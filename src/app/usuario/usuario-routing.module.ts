import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path:'',
    component: UsuarioComponent,
    children:[
      {
        path:'home',
        component:HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
