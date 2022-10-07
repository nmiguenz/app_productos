import { DbService } from './../../servicios/db.service';
import { Container } from './../../clases/container';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-listado-containers',
  templateUrl: './listado-containers.component.html',
  styleUrls: ['./listado-containers.component.css']
})
export class ListadoContainersComponent implements OnInit {

  listadoContainers : Container[] =  [];
  @Output() containerSelecionado : EventEmitter<Container> = new EventEmitter<Container>();

  constructor(private db : DbService) {}

  ngOnInit(): void {
    //Listado de containers
    this.db.getCollection('containers')
    .then((res:any)=>{
      res.subscribe((ref:any)=>{
        this.listadoContainers = ref.map((element:any) => {
          let container = element.payload.doc.data();
          container['id'] = element.payload.doc.id;
          return container;
        });
      })
    })
    .catch(error=>console.log(error));
  }

  seleccionContainerEmit(container: Container){
    this.containerSelecionado.emit(container);
    console.log(container)
  }

}
