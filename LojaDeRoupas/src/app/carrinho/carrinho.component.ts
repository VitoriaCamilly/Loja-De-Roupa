import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../services/carrinho.service';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  constructor(
    private router: Router,
    private carrinhoService: CarrinhoService,
    private produtosService: ProdutosService
  ) { }
  
  nomeProduto: "";
  lista: [0];

  ngOnInit() {
    this.carrinhoService.checarCarrinho(localStorage.getItem('EMAIL'))
      .then((resultado: any) => {
        console.log("1",resultado);
        for(let teste of resultado){
          console.log(teste.CODIGO)
          this.produtosService.buscarCarinho(teste.CODIGO)
      .then((resultado: any) => {
        console.log("2",resultado);
        this.nomeProduto = resultado.produtinho.NOME;
        this.lista = resultado.produtinho;
      }).catch(erro => {
        console.log('Erro ao buscar usuarios', erro)
      })
        }
        
      }).catch(erro => {
        console.log('Erro ao buscar usuarios', erro)
      })
  }

  contador = 0;
  pais = '';
  estado = '';
  cidade = '';
  bairro = '';
  cep = '';
  rua = '';
  numero = null;
  qtdd = null;
  precofinal = null;
  produtos_codigo = null;


  encaminhar(caminho) {
    this.router.navigate([caminho]);
    window.scrollTo(0, 0);
  }

  frete(cont) {
    this.contador = cont;
  }

  endereco() {
    this.carrinhoService.endereco(this.pais, this.estado, this.cidade, this.bairro, this.cep, this.rua, this.numero)
      .then((resultado = null) => {
        alert("Endereço adicionado ao frete com sucesso!")
        this.router.navigate(['/pagamento'])
      }).catch((erro: any) => {
        console.log(erro);
      })
  }

  // carrinho() {
  //   this.carrinhoService.carrinho(this.qtdd, this.precofinal, localStorage.getItem("EMAIL"), this.produtos_codigo)
  //     .then((resultado = null) => {
  //       alert("Carrinho comprado com sucesso!")
  //       this.router.navigate(['/inicio'])
  //     }).catch((erro: any) => {
  //       console.log(erro);
  //     })
  // }

  cancelar() {
    this.contador = 0;
  }

  insta() {
    location.href = 'https://www.instagram.com/';
  }

  logout() {
    localStorage.removeItem("EMAIL");
    localStorage.removeItem("SENHA");
    this.router.navigate(['']);
  }
}
