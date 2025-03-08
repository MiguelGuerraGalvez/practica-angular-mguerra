import { Component, OnInit } from '@angular/core';
import { IProducto } from '../iproducto';
import { ProductosService } from '../productos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editar',
  standalone: false,
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit {
  id!: number;
  formulario: FormGroup;

  productos!:IProducto[];
  
  constructor(private servicioproductos:ProductosService, private fb: FormBuilder, private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    this.formulario = this.fb.group({
      id: [''],
      nombre: ['',  [Validators.required, Validators.minLength(5)]],
      precio: ['', [Validators.required, Validators.min(0.01)]]
    });
  }
  
    ngOnInit(): void {
      this.id = Number(this.route.snapshot.paramMap.get('id'));
      this.formulario.patchValue({
        id: this.id
      });
    }

  editar() {
    if (this.formulario.valid) {
      const datos = this.formulario.value;
      console.log('Datos a enviar:', JSON.stringify(datos, null, 2));
      
      // Llamada al servicio para crear el producto
      this.servicioproductos.editar(datos).subscribe(
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
  }
}
