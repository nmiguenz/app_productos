import { DbService } from './../../servicios/db.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Container } from 'src/app/clases/container';

@Component({
  selector: 'app-baja-container',
  templateUrl: './baja-container.component.html',
  styleUrls: ['./baja-container.component.css']
})
export class BajaContainerComponent {

  @Input() inputContainer : Container | any;
  containerGroup : FormGroup | any;

  constructor(private fb : FormBuilder, private db: DbService) {
    this.containerGroup = this.fb.group({
      'marca' : [''],
    });
  }

  deleteContainer(){
    this.db.delete('containers', this.inputContainer.id);
  }
}
