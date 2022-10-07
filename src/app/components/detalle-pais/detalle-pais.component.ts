import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {

  @Input() productoParaMostrar: Producto | any;

  constructor() { }

  ngOnInit(): void {
  }

}
