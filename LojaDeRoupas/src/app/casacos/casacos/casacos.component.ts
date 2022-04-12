import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-casacos',
  templateUrl: './casacos.component.html',
  styleUrls: ['./casacos.component.css']
})
export class CasacosComponent implements OnInit {

  nomeProduto: "";
  lista: [0];

  constructor(
    private router: Router,
    private produtosService: ProdutosService
  ) { }

  ngOnInit() {
    this.produtosService.buscarProdutos("Casacos")
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
}
