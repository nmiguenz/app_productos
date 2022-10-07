import { Container } from './../../clases/container';
import { Component } from '@angular/core';

@Component({
  selector: 'app-abm-container',
  templateUrl: './abm-container.component.html',
  styleUrls: ['./abm-container.component.css']
})
export class AbmContainerComponent{

  containerSeleccionado : Container | any;

  constructor() { }

  getContainer(container : Container){
    this.containerSeleccionado = container;
  }


}
