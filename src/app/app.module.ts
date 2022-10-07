import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

//Modulos AngularFire
import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BienvenidaComponent } from './page/bienvenida/bienvenida.component';
import { AbmContainerComponent } from './page/abm-container/abm-container.component';
import { AltaContainerComponent } from './components/alta-container/alta-container.component';
import { ModifContainerComponent } from './components/modif-container/modif-container.component';
import { BajaContainerComponent } from './components/baja-container/baja-container.component';
import { ListadoContainersComponent } from './components/listado-containers/listado-containers.component';


@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    NavbarComponent,
    AbmContainerComponent,
    AltaContainerComponent,
    ModifContainerComponent,
    BajaContainerComponent,
    ListadoContainersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
