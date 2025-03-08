import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eliminar',
  standalone: false,
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent implements OnInit {
  id!: number;
  // formulario: FormGroup;

  constructor(private servicioproductos:ProductosService, /*private fb: FormBuilder*/private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router) {
    // this.formulario = this.fb.group({
    //   id: ['']
    // });
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    // Confirmar y eliminar
    if (confirm(`¿Estás seguro de eliminar el producto con ID ${this.id}?`)) {
      this.eliminar();
    } else {
      this.router.navigate(['/listado']); // Redirige a otra página si se cancela
    }
  }

  eliminar() {
    // const id = this.formulario.value;

    // // Llamada al servicio para eliminar el producto
    // this.servicioproductos.eliminar(id).subscribe(
    //   response => {
    //     console.log('Respuesta del servidor:', response);
    //     alert('Producto eliminado con éxito');
    //   },
    //   error => {
    //     console.error('Error en la solicitud:', error);
    //     alert('Hubo un error al eliminar el producto');
    //   }
    // );

    this.servicioproductos.eliminar(this.id).subscribe({
      next: () => {
        alert('Producto eliminado correctamente');
        this.router.navigate(['/listado']);
      },
      error: (err) => {
        alert('Error al eliminar el producto');
        console.error(err);
        this.router.navigate(['/listado']);
      }
    });
  }
}
