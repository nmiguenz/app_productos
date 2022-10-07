import { AbmContainerComponent } from './page/abm-container/abm-container.component';
import { AuthGuard } from './guard/auth.guard';
import { BienvenidaComponent } from './page/bienvenida/bienvenida.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guard/admin.guard';

const routes: Routes = [
  { path: '', component: BienvenidaComponent},
  { path: 'ingreso', loadChildren: () => import('./ingreso/ingreso.module').then(m => m.IngresoModule)},
  { path: 'productos', loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule), canActivate: [AuthGuard] },
  { path: 'container', component: AbmContainerComponent, canActivate: [AuthGuard, AdminGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
