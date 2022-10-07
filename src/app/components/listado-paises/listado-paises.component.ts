import { HttpService } from 'src/app/servicios/http.service';
import { Component, EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-listado-paises',
  templateUrl: './listado-paises.component.html',
  styleUrls: ['./listado-paises.component.css']
})
export class ListadoPaisesComponent {

  arrayPaises: [] | any;
  @Output() paisSeleccionado : EventEmitter<any> = new EventEmitter<any>()

  constructor(private http: HttpService) {

    http.getArrayPaises().subscribe((listaPiases)=>{
      this.arrayPaises = listaPiases;
    });
  }

  getPaisSeleccionado(pais: [] | any ){
    this.paisSeleccionado.emit(pais);
  }

}
