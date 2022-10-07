import { Producto } from 'src/app/clases/producto';
import { Component } from '@angular/core';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent {

  productoSeleccionado : Producto | any;

  constructor() { }

  tomarProductoParaMostrar(producto : Producto){
    this.productoSeleccionado = producto;
    console.log(this.productoSeleccionado);
  }

}
