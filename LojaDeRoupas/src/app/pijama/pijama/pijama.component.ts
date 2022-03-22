import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { $ } from 'protractor';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-pijama',
  templateUrl: './pijama.component.html',
  styleUrls: ['./pijama.component.css']
})
export class PijamaComponent implements OnInit {

  nomeProduto = "";


  constructor(
    private produtosService : ProdutosService, 
    private router: Router
  ) { }

  ngOnInit() {
    this.produtosService.buscarProdutos(1)
    .then((resultado:any) => {
      console.log(resultado);
      this.nomeProduto = resultado.produtinho.NOME;
    }).catch(erro => {
      console.log('Erro ao buscar usuarios', erro)
    })
  }

  // addNome(codigo, resultado) {
  //   this.nomeProduto = resultado.list[codigo].NOME;
  // }

  encaminhar(caminho) {
    this.router.navigate([caminho]);
    window.scrollTo(0, 0);
  }





}
