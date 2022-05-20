import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  public recuperarProdutos() : Observable<Produto[]>{
    return this.http.get<Produto[]>('http://localhost:8080/produtos');
  }
}
