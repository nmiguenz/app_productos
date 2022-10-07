import { Producto } from 'src/app/clases/producto';
import { DbService } from './../../servicios/db.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {

  @Output() productoSeleccionado : EventEmitter<any> = new EventEmitter<any>();
  listadoProductos : Producto[] | any = [];

  constructor(private db: DbService) {

    this.db.getCollection('productos').then( (ref:any) =>{
      ref.subscribe((listadoRef: any) => {
        listadoRef.forEach((element: any) => {
          this.listadoProductos.push(element.payload.doc.data());
        });
      });
    })

  }

  ngOnInit(): void {}

  getProductoSeleccionado(detalleProd: Producto){
    this.productoSeleccionado.emit(detalleProd);
  }

}
