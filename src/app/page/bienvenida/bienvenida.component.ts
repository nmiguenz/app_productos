import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/servicios/http.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  datosGit : any;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getDatosGit().subscribe((listaDatos) =>{
      this.datosGit = listaDatos;
      console.log(this.datosGit);
    });
  }

}
