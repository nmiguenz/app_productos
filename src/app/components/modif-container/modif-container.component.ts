import { Container } from './../../clases/container';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DbService } from 'src/app/servicios/db.service';

@Component({
  selector: 'app-modif-container',
  templateUrl: './modif-container.component.html',
  styleUrls: ['./modif-container.component.css']
})
export class ModifContainerComponent {

  containerGroup: FormGroup | any;
  @Input() inputContainer : Container | any;

  constructor(private fb : FormBuilder, private db : DbService) {
    this.containerGroup = this.fb.group({
      'codigo' : [''],
      'marca' : ['',[Validators.required]],
      'capacidad' :[0,[Validators.required, Validators.max(5000)]],
    });

  }

  modificarContainer(){
    this.db.update('containers', this.inputContainer.id, this.containerGroup.value)
    .then(()=>{
      alert('Se modificó un contenedor.');
    })
    .catch((error) =>{
      alert('No se pudo modificar el contenedor ' + error)
    });
  }

}
