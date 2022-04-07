import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoletoService } from '../services/boleto.service';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  contador = 0;
  boleto = null;
  maximo = 48;
  i = 0;
  lista = [];
  boletinho = "";
  codigo = "";
  carrinho_codigo = null;

  constructor(
    private boletoService: BoletoService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  encaminhar(caminho) {
    this.router.navigate([caminho]);
    window.scrollTo(0, 0);
  }

  confirmaPagamento() {
    // this.pagamentoService.confirma(this.nome, this.email, this.senha, this.nascimento)
    //   .then((resultado: any) => {

    //     alert("Você foi cadastrado!")
    //     if (resultado.cliente){
    //       this.router.navigate(['/login'])
    //     } else {
    //       console.log("Não fez login");
    //     }
    //   }).catch((erro: any) => {
    //     console.log(erro);
    //   })
  }

  pagamento(cont) {
    this.contador = cont;
    if (cont == 2) {
      this.gerarBoleto();
    }
  }
  
  gerarBoleto() {
    for (this.i = 0; this.i < this.maximo; this.i++) {
      this.boleto = Math.floor(Math.random() * 10);
      this.lista.push(this.boleto);
    }

    for (let i = 0; i < 48; i++) {
      this.boletinho += this.lista[i];
    }
  }

  boletoFinal(){
    this.boletoService.boleto(this.codigo, this.carrinho_codigo)
     .then((resultado = null) => {
      alert("Sua compra foi finalizada com sucesso! Retire após 5 dias do pagamento do boleto ou em caso de frete, adicione mais 30 dias à espera!")
       this.router.navigate(['/pagamento'])
      }).catch((erro: any) => {
       console.log(erro);
     })
}
}






