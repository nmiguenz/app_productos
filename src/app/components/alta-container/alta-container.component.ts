import { Container } from './../../clases/container';
import { DbService } from './../../servicios/db.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-alta-container',
  templateUrl: './alta-container.component.html',
  styleUrls: ['./alta-container.component.css']
})
export class AltaContainerComponent {

  @Output() nuevoContainer : EventEmitter<any>= new EventEmitter<any>();
  containerGroup: FormGroup | any;

  constructor(private fb : FormBuilder, private db : DbService) {
    this.containerGroup = this.fb.group({
      'codigo' : ['',[Validators.required]],
      'marca' : ['',[Validators.required]],
      'capacidad' :[0,[Validators.required, Validators.max(5000)]],
    });
  }

  async altaContainer(){
    let container : Container | any = this.containerGroup.value;

    await this.db.alta(container, 'containers')
    .then((res: any)=>{
      container['id'] = res.id; //Le asigno el ID para poder modificarlo rápidamente
      this.containerGroup.reset();
      this.nuevacontainerEmit(container);
      console.log('alta',container);
      alert('Se dio de alta una container.');
    })
    .catch((error) =>{
      alert('No se dio de alta la container por ' + error)
    });
  }

  nuevacontainerEmit(container: Container | any){
    this.nuevoContainer.emit(container);
  }



}
