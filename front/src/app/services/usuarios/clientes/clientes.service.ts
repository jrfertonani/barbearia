import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clientes } from '../../../models/usuarios/Clientes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  URL = 'http://localhost:8080/clientes';

  constructor(private http: HttpClient) {}


  List(): Observable<Clientes[]> {
    return this.http.get<Clientes[]>(this.URL);
  }

  findById(id:number): Observable<Clientes>{
    //const url = `${this.URL}/${marca.id}`;
    return this.http.get<Clientes>(`${this.URL}/${id}`)
  };

  createCliente(cliente : Clientes):Observable<Clientes>{
    return this.http.post<Clientes>(this.URL, cliente)
  };


  editCliente(cliente: Clientes):Observable<Clientes>{
    const url = `${this.URL}/${cliente.idCliente}`
    return this.http.put<Clientes>(url,cliente);
  }

  delete(id: number):Observable<Clientes>{
    return this.http.delete<Clientes>(`${this.URL}/${id}`);
  }


}
