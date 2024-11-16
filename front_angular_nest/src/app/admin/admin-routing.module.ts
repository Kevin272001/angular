import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from '../auth/components/perfil/perfil.component';
import { CategriaComponent } from './inventario/components/categria/categria.component';
import { LayoutComponent } from './layout/layout.component';



const routes: Routes = [

  {
    path:"",
    component:LayoutComponent,
    children:[

   {
    path:"perfil",
    component:PerfilComponent
  },
  {
   path:"categoria",
   component:CategriaComponent
  }
]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
