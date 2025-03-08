import { Component, OnInit } from '@angular/core';
import { IProducto } from '../iproducto';
import { ProductosService } from '../productos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-creacion',
  standalone: false,
  templateUrl: './creacion.component.html',
  styleUrl: './creacion.component.css'
})
export class CreacionComponent implements OnInit {
  formulario: FormGroup;

  productos!:IProducto[];
  
  constructor(private servicioproductos:ProductosService, private fb: FormBuilder, private router: Router) {
    this.formulario = this.fb.group({
      nombre: ['',  [Validators.required, Validators.minLength(5)]],
      precio: ['', [Validators.required, Validators.min(0.01)]]
    });
  }

  enviar() {
    if (this.formulario.valid) {
      const datos = this.formulario.value;
      console.log('Datos a enviar:', JSON.stringify(datos, null, 2));
      
      // Llamada al servicio para crear el producto
      this.servicioproductos.crear(datos).subscribe(
        response => {
          console.log('Respuesta del servidor:', response);
          alert('Producto creado con éxito');
        },
        error => {
          console.error('Error en la solicitud:', error);
          alert('Hubo un error al crear el producto');
        }
      );
    }

    this.formulario.reset();
    this.router.navigate(['/creacion']);
  }

  ngOnInit(): void {
  }
}
