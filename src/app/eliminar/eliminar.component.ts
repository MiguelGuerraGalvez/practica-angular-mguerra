import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
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

  constructor(private servicioproductos:ProductosService, private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

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
