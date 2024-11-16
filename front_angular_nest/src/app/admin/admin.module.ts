import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ListaPedidoComponent } from './pedido/components/lista-pedido/lista-pedido.component';
import { NuevoPedidoComponent } from './pedido/components/nuevo-pedido/nuevo-pedido.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    ClienteComponent,
    ListaPedidoComponent,
    NuevoPedidoComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
