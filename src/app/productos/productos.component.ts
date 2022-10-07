import { AuthGuard } from './../guard/auth.guard';
import { AuthService } from 'src/app/servicios/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  alta = true;

  constructor(public auth: AuthService) {
  }

  ngOnInit(): void {
  }



}
