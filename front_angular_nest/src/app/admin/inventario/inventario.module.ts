import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './components/producto/producto.component';
import { CategriaComponent } from './components/categria/categria.component';



@NgModule({
  declarations: [
    ProductoComponent,
    CategriaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InventarioModule { }
