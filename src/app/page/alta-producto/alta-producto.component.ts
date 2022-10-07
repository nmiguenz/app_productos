import { DbService } from './../../servicios/db.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})
export class AltaProductoComponent implements OnInit {

  productGroup: FormGroup | any;
  pais : {} | any;
  bandera : string = '';

  constructor(private fb: FormBuilder, private db: DbService) {

    this.productGroup = fb.group({
      'codigo': ['', [Validators.required, Validators.minLength(4)]],
      'descripcion': ['', [Validators.required]],
      'precio': ['', [Validators.required, Validators.min(100), Validators.max(10000)]],
      'stock': ['', [Validators.required]],
      'pais': ['', [Validators.required]],
      'comestible': ['', [Validators.required]]
    })

   }

  ngOnInit(): void {
  }

  obtenerPais(paisSeleccionado: any){
    this.pais = paisSeleccionado;
    this.productGroup.controls.pais.setValue(paisSeleccionado.translations.spa.common)
    this.bandera = this.pais.flags.svg;
  }

  async altaProducto(){
    let producto : Producto = this.productGroup.value;
    producto.pais = this.pais;

    let res = await this.db.alta(producto, 'productos');

    if (res){
      this.productGroup.reset();
      alert('Se dio de alta el producto.');
    }
    else
      alert('No se dio de alta el producto.');
  }

}
