import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { RegistroComponent } from './views/registro/registro.component';
import { VisitaComponent } from './visita.component';

const routes: Routes = [{
  path:'',
  component: VisitaComponent,
  children:[
    {
      path:'',
      redirectTo:'/login'
    },
    {
      path:'registro',
      component:RegistroComponent
    },
    {
      path:'login',
      component:LoginComponent
    }
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitaRoutingModule { }
