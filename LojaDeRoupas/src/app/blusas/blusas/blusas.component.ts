import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-blusas',
  templateUrl: './blusas.component.html',
  styleUrls: ['./blusas.component.css']
})
export class BlusasComponent implements OnInit {

  nomeProduto: "";
  lista: [0];

  constructor(
    private router: Router,
    private produtosService: ProdutosService
  ) { }

  ngOnInit() {
    this.produtosService.buscarProdutos("Blusas")
    .then((resultado:any) => {
      console.log(resultado);
      this.nomeProduto = resultado.produtinho.NOME;
      this.lista = resultado.produtinho;
    }).catch(erro => {
      console.log('Erro ao buscar usuarios', erro)
    })
  }

  encaminhar(caminho) {
    this.router.navigate([caminho]);
    window.scrollTo(0, 0);
  }

  insta(){
    location.href='https://www.instagram.com/';
  }
}
