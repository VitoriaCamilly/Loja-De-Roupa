import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { $ } from 'protractor';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-pijama',
  templateUrl: './pijama.component.html',
  styleUrls: ['./pijama.component.css']
})
export class PijamaComponent implements OnInit {

  nomeProduto = "";
  lista = [{PRECO: ""}];

  constructor(
    private produtosService : ProdutosService, 
    private router: Router,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    this.produtosService.buscarProdutos("Pijamas")
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

  logout(){
    localStorage.removeItem("EMAIL");
    localStorage.removeItem("SENHA");
    this.router.navigate(['']);
  }

  addCarrinho(codigo) {
    if (!localStorage.getItem("Carrinho")) {
      console.log("if 1")
      localStorage.setItem("Codigo", codigo);
      this.carrinhoService.addCarrinhoTemp(1, parseFloat(this.lista[0].PRECO.replace("R$", "").replace(",", ".")), localStorage.getItem("EMAIL"), codigo)
    } else {
      console.log("if else2")
      console.log(JSON.stringify(localStorage.getItem("Carrinho")));
    }
  }
}
