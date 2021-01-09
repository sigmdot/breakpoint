import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './views/registro/registro.component';
import { VisitaComponent } from './visita.component';

const routes: Routes = [{
  path:'',
  component: VisitaComponent,
  children:[
    {
      path:'registro',
      component:RegistroComponent
    }
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitaRoutingModule { }
