import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class DescricaoService {

  constructor(private http: HttpClient) { }

  public recuperarDadosDoProduto() : Observable<Produto[]>{
    return this.http.get<Produto[]>('https://backend-vitrine.herokuapp.com/produtos');
  }
}
