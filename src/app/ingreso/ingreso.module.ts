import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngresoRoutingModule } from './ingreso-routing.module';
import { IngresoComponent } from './ingreso.component';
import { LoginComponent } from '../components/login/login.component';


@NgModule({
  declarations: [
    IngresoComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IngresoRoutingModule,
  ]
})
export class IngresoModule { }
