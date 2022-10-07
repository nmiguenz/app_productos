export class Container {
  'codigo': string = '';
  'marca': string = '';
  'capacidad': number = 0;

  constructor(codigo: string, brand: string, capacity: number){
    this.codigo = codigo,
    this.marca = brand,
    this.capacidad = capacity
  }
}
