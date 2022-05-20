import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  listaProdutos: Produto[] = [];

  constructor(private service: ProdutoService) { }

  ngOnInit(): void {
    this.service.recuperarProdutos().subscribe(
      (resultado: Produto[]) => {
        alert("Estou no método");
        this.listaProdutos = resultado;
      },
      (err) => {
        alert("Erro ao recuperar produto");
      }
    );
  }

}
