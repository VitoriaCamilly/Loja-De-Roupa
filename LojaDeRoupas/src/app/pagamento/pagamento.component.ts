import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoletoService } from '../services/boleto.service';
import { CartaoService } from '../services/cartao.service';

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
  cliente_email =  "";

  constructor(
    private boletoService: BoletoService,
    private router: Router,
    private cartaoService: CartaoService
  ) { }

  ngOnInit() {
  }

  encaminhar(caminho) {
    this.router.navigate([caminho]);
    window.scrollTo(0, 0);
  }

  confirmaPagamentoCartao() {
    this.cartaoService.cadastroCartao(this.numCartao, this.mesValidade, this.anoValidade, this.codigoSeguranca, this.nomeCartao, this.cliente_email, this.carrinho_codigo)
      .then((resultado: any) => {
        if (this.numCartao != ""){
          if (this.mesValidade != null) {
            if (this.anoValidade != null) {
              if (this.codigoSeguranca != "") {
                if (this.nomeCartao != "") {
                  if (this.cliente_email != "") {
                    alert("Pagamento efetuado!")
                    this.router.navigate(["/inicio"])
                  } else {
                    alert("Precisa informar o email!")
                  }
                }else {
                  alert("Precisa informar o nome no Cartão!")
                }
              }else {
                alert("Precisa informar o Código de Segurança!")
              }
            }else {
              alert("Precisa informar o Ano de Validade do Cartao!")
            }
          }else {
            alert("Precisa informar o Mês de validade do Cartão!")
          }
        }else {
          alert("Precisa informar o número do Cartão!")
        }
      }).catch((erro: any) => {
        alert("Cartão não Registrado!");
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

  boletoFinal() {
    this.boletoService.boleto(this.codigo, this.carrinho_codigo)
      .then((resultado = null) => {
        alert("Sua compra foi finalizada com sucesso! Retire após 5 dias do pagamento do boleto ou em caso de frete, adicione mais 30 dias à espera!")
        this.router.navigate(['/pagamento'])
      }).catch((erro: any) => {
        console.log(erro);
      })
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






