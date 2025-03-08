// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProducto } from './iproducto';

const URL_BASE="http://localhost/API%20Angular/consultaProductos.php";

interface ApiResponse {
  articulos: any[]; // O define una interfaz para el artículo si es necesario
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  // Creamos una propiedad llamada httpclient
  constructor(private httpclient:HttpClient) { }

  obtenerTodos() {
    // Devolvemos un objeto de Angular llamado Observable
    return this.httpclient.get<any>(`${URL_BASE}`);
  }

  crear(producto: IProducto): Observable<any> {
    // Crear los parámetros de la solicitud POST
    const params = new HttpParams()
      .set('nombre', producto.nombre)
      .set('precio', producto.precio.toString());  // Convertimos el precio a string para el parámetro

    // Realizamos el POST usando x-www-form-urlencoded (con HttpParams)
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.httpclient.post(URL_BASE, params, { headers });
  }

  eliminar(id: number): Observable<any> {
    // Realizamos el DELETE
    return this.httpclient.delete(URL_BASE, { body: { id: id } });
  }

  editar(producto: IProducto): Observable<any> {
    // Realizamos el POST usando x-www-form-urlencoded (con HttpParams)
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.httpclient.put(URL_BASE, JSON.stringify(producto), { headers });
  }
}
