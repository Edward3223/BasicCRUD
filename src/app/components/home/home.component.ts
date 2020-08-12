import { Component, OnInit } from '@angular/core';
import { RealdbService } from 'src/app/service/realdb.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private db: RealdbService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  Product: any[]

  SetProduct = {
    Nombre: 'Hola',
    Precio: '',
  }

  getProducts(){
    this.db.getProducts().subscribe(resp =>{
      this.Product = resp
      console.log(this.Product)
    }, (err) =>{

      Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Ok'
      })

    })
  }

  setProduct(){
    this.db.setProducts(this.SetProduct).subscribe(resp =>{
      this.getProducts();
      Swal.fire({
        title: 'Yay!',
        text: 'Producto enviado!',
        icon: 'success',
        confirmButtonText: 'Ok'
      })

    }, (err) =>{
      Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    })
  }



}
