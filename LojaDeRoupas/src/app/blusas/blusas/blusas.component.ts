import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutosService } from 'src/app/services/produtos.service';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-blusas',
  templateUrl: './blusas.component.html',
  styleUrls: ['./blusas.component.css']
})
export class BlusasComponent implements OnInit {

  nomeProduto: "";
  lista = [{ PRECO: "" }];

  constructor(
    private router: Router,
    private produtosService: ProdutosService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    this.produtosService.buscarProdutos("Blusas")
      .then((resultado: any) => {
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

  insta() {
    location.href = 'https://www.instagram.com/';
  }

  logout() {
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





    // console.log("bbbb");
    // this.carrinhoService.checarProduto(codigo)
    //   .then((resultado: any) => {
    //     console.log(resultado);
    //     if (resultado == "") {

    // .then((resultado: any) => {
    //   console.log(resultado);
    //   console.log(codigo);
    //   alert("Produto adicionado ao carrinho!");
    // }).catch(erro => {
    //   console.log('Erro ao buscar usuarios', erro)
    // })
    //   } else {
    //     alert("Produto ja esta no carrinho")
    //   }
    // }).catch(erro => {
    //   console.log('Erro ao buscar usuarios', erro)
    // })
  }
}
