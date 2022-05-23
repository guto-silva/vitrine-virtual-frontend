import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { DescricaoService } from '../services/descricao.service';

@Component({
  selector: 'app-descricao',
  templateUrl: './descricao.component.html',
  styleUrls: ['./descricao.component.css']
})
export class DescricaoComponent implements OnInit {

  listaDescricao: Produto[] = [];

  constructor(private descricaoService: DescricaoService) { }

  ngOnInit(): void {
    this.descricaoService.recuperarDadosDoProduto().subscribe(
      (descricao: Produto[]) => {
        this.listaDescricao = descricao},
      (err) => {
        alert("Erro ao buscar informações do produto");
      }
    );
  }

}
