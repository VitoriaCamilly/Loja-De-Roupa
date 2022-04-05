import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagamentoService } from '../services/pagamento.service';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  contador = 0;
  boleto = null;
  

  constructor(
    private pagamentoService: PagamentoService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  encaminhar(caminho) {
    this.router.navigate([caminho]);
    window.scrollTo(0, 0);
  }

  confirmaPagamento(){
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

  pagamento(cont){
    this.contador = cont;
    if (cont == 2) {
      this.gerarBoleto();
    }
  }

  maximo = 48;
  i = 0;
  lista = [];
  p = null;
  n = null;
  tmp = null;

  gerarBoleto(){
    for (this.i = 0; this.i <= 48; this.i++) {
      this.boleto = Math.floor(Math.random() * 10);
    }

  //   for (this.i = 0; this.i < this.maximo; this.i++) {
  //     this.lista[this.i] = this.i + 1;
  //   }

  //   for (this.p = this.lista.length; this.p;) {
  //     this.n = Math.random() * this.p-- | 0;
  //     this.tmp = this.lista[this.n];
  //     this.lista[this.n] = this.lista[this.p];
  //     this.lista[this.p] = this.tmp;
  // }
   
  }



  

}
