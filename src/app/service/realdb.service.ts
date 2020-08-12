import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Key } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class RealdbService {

  constructor(private http: HttpClient) { }

  private ObjectToArray(ObjProducts: Object){

    const Products = []

    console.log(ObjProducts)

    Object.keys( ObjProducts ).forEach( key =>{

      let productModel = {
        Id: '',
        Nombre: '',
        Precio: ''
      }

      productModel = ObjProducts[key];
      productModel.Id = key
      Products.push( productModel )
    })

    if(ObjProducts === null){return [];}

    return Products

  }

  getProducts(){
    return this.http.get('https://proyectov-33057.firebaseio.com/Producto.json')
                    .pipe(
                      map(this.ObjectToArray)
                    )

  }
  setProducts(item: any){
    return this.http.post('https://proyectov-33057.firebaseio.com/Producto.json', item);
  }

  updateProducts(item: any){

    const itemtemp = {
      ...item
    }
    delete itemtemp.id
    return this.http.post('https://proyectov-33057.firebaseio.com/Producto.json', itemtemp);
  }


}


