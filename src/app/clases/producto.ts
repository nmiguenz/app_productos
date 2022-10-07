export class Producto {

    'codigo' : string = ''
    'descripcion' : string = ''
    'precio' : number = 0
    'stock' : number = 0
    'pais': {} = {}
    'comestible' : boolean

    constructor(cod:string, descripcion:string, precio:number, stock:number, nacionality: {}, comestible:boolean){
        this.codigo = cod;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
        this.pais = nacionality;
        this.comestible = comestible;
    }

}
