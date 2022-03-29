import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  constructor(
    private router: Router,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
  }

  contador = 0;
  pais = '';
  estado = '';
  cidade = '';
  bairro = '';
  cep = '';
  rua = '';
  numero = 0;


  encaminhar(caminho) {
    this.router.navigate([caminho]);
    window.scrollTo(0, 0);
  }

  frete(cont){
    this.contador = cont;
  }

  endereco(){
    this.carrinhoService.endereco(this.pais, this.estado, this.cidade, this.bairro, this.cep, this.rua, this.numero)
      .then((resultado = null) => {
        alert("Endereço adicionado ao frete com sucesso!")
        this.router.navigate(['/pagamento'])
      }).catch((erro: any) => {
        console.log(erro);
      })
    }

  cancelar(){
    this.contador = 0;
  }
}
