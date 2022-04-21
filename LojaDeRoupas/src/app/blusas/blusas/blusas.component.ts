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
    localStorage.clear();
    this.router.navigate(['']);
  }

  addCarrinho(codigo) {
    this.carrinhoService.checarProduto(codigo)
      .then((resultado: any) => {
        if (resultado == "") {
          this.carrinhoService.carrinho(1, 1, localStorage.getItem("EMAIL"), codigo)
            .then((resultado: any) => {
              console.log(resultado);
              console.log(codigo);
              alert("Produto adicionado ao carrinho!");
            }).catch(erro => {
              console.log('Erro ao buscar usuarios', erro)
            })
        } else {
          alert("Produto ja esta no carrinho")
        }
      }).catch(erro => {
        console.log('Erro ao buscar usuarios', erro)
      })
  }
}
