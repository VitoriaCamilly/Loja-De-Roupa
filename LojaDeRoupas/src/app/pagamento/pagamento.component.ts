import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoletoService } from '../services/boleto.service';
import { CartaoService } from '../services/cartao.service';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {


  lista = [];
  boletinho = "";
  codigo = "";
  carrinho_codigo = null;
  numCartao = "";
  mesValidade = null;
  anoValidade = null;
  codigoSeguranca = "";
  nomeCartao = "";
  cliente_email = "";

  constructor(
    private boletoService: BoletoService,
    private router: Router,
    private cartaoService: CartaoService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
  }

  getPrecoFinal() {
    return Number(Number(localStorage.getItem("PrecoFinal")) * Number(localStorage.getItem("Quantidade")));
  }

  encaminhar(caminho) {
    this.router.navigate([caminho]);
    window.scrollTo(0, 0);
  }

  confirmaPagamentoCartao() {
    this.cartaoService.cadastroCartao(this.numCartao, this.mesValidade, this.anoValidade, this.codigoSeguranca, this.nomeCartao, this.cliente_email, this.carrinho_codigo)
      .then((resultado: any) => {
        if (this.numCartao != "") {
          if (this.mesValidade != null) {
            if (this.anoValidade != null) {
              if (this.codigoSeguranca != "") {
                if (this.nomeCartao != "") {
                  if (this.cliente_email != "") {
                    alert("Pagamento efetuado!")
                    this.carrinhoService.carrinho(parseInt(localStorage.getItem("Quantidade")), parseFloat(localStorage.getItem("PrecoFinal")), localStorage.getItem("EMAIL"), localStorage.getItem("Codigo"));
                    this.confirmarCarrinho();
                    this.router.navigate(["/inicio"])
                  } else {
                    alert("Precisa informar o email!")
                  }
                } else {
                  alert("Precisa informar o nome no Cart??o!")
                }
              } else {
                alert("Precisa informar o C??digo de Seguran??a!")
              }
            } else {
              alert("Precisa informar o Ano de Validade do Cartao!")
            }
          } else {
            alert("Precisa informar o M??s de validade do Cart??o!")
          }
        } else {
          alert("Precisa informar o n??mero do Cart??o!")
        }
      }).catch((erro: any) => {
        alert("Cart??o n??o Registrado!");
      })
  }

  contador = 0;
  boleto = null;
  maximo = 48;
  i = 0;

  pagamento(cont) {
    this.contador = cont;
    if (cont == 2) {
      this.gerarBoleto();
    }
  }

  gerarBoleto() {
    this.boletinho = "";
    for (this.i = 0; this.i < this.maximo; this.i++) {
      this.boleto = Math.floor(Math.random() * 10);
      this.lista.push(this.boleto);
    }

    for (let i = 0; i < 48; i++) {
      this.boletinho += this.lista[i];
    }
  }

  // boletoFinal() {
  //   this.boletoService.boleto(this.codigo, this.carrinho_codigo)
  //     .then((resultado = null) => {
  //       alert("Sua compra foi finalizada com sucesso! Retire ap??s 5 dias do pagamento do boleto ou em caso de frete, adicione mais 30 dias ?? espera!")
  //       this.router.navigate(['/pagamento'])
  //     }).catch((erro: any) => {
  //       console.log(erro);
  //     })
  //     this.confirmarCarrinho();
  // }

  insta() {
    location.href = 'https://www.instagram.com/';
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }

  email_cliente;

  confirmarCarrinho() {
    this.carrinhoService.confirmarCarrinho(localStorage.getItem("EMAIL"))
      .then((resultado: any) => {

      }).catch((erro: any) => {
        console.log(erro);
      })
       alert("Sua compra foi finalizada com sucesso! Retire ap??s 5 dias do pagamento do boleto ou em caso de frete, adicione mais 30 dias ?? espera!");
        this.carrinhoService.carrinho(parseInt(localStorage.getItem("Quantidade")), parseFloat(localStorage.getItem("PrecoFinal")), localStorage.getItem("EMAIL"), localStorage.getItem("Codigo"));
        this.router.navigate(["/inicio"])
  }


}






