import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { IProducto } from '../iproducto';

@Component({
  selector: 'app-listado',
  standalone: false,
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent implements OnInit {

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
