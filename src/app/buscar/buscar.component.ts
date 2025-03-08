import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { IProducto } from '../iproducto';

@Component({
  selector: 'app-buscar',
  standalone: false,
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent implements OnInit {
  nombre:string = "";

  productos!:IProducto[];

  constructor(private servicioproductos:ProductosService) {}


  ngOnInit(): void {
      this.servicioproductos.obtenerTodos().subscribe(
        (datos)=>{
          this.productos = datos.productos;
        }
      );
  }
}
