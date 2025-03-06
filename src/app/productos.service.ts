import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL_BASE="https://apiproyecto016.iesruizgijon.es/api/articulos";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  // Creamos una propiedad llamada httpclient
  constructor(private httpclient:HttpClient) { }

  // Implementar los métodos que necesitamos para:
  // rescatar todos los productos
  // rescatar un producto con un determinado id
  // Actualizar ...
  // Eliminar ...

  obtenerTodos() {
    // Devolvemos un objeto de Angular llamado Observable
    return this.httpclient.get<any>(`${URL_BASE}`);
  }
}
