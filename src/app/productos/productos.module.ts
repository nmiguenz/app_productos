import { ListadoPaisesComponent } from './../components/listado-paises/listado-paises.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetalleProductoComponent } from './../page/detalle-producto/detalle-producto.component';
import { AltaProductoComponent } from './../page/alta-producto/alta-producto.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos.component';
import { ListadoProductosComponent } from '../components/listado-productos/listado-productos.component';
import { DetalleComponent } from '../components/detalle/detalle.component';
import { DetallePaisComponent } from '../components/detalle-pais/detalle-pais.component';
import { TransformBooleanPipe } from '../pipes/transform-boolean.pipe';


@NgModule({
  declarations: [
    ProductosComponent,
    AltaProductoComponent,
    DetalleProductoComponent,
    ListadoPaisesComponent,
    ListadoProductosComponent,
    DetalleComponent,
    DetallePaisComponent,
    TransformBooleanPipe
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ProductosModule { }
