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
  }

}
