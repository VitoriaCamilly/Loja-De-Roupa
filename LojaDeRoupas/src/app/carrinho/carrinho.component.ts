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
  lista = [{ PRECO: "" }];


  // this.carrinhoService.checarCarrinho(localStorage.getItem('EMAIL'))
  //   .then((resultado: any) => {
  //     let listinha = resultado as [];
  //     for(let i = 0; i < listinha.length; i++){
  //     console.log(resultado[i].PRODUTOS_CODIGO);
  //     }
  //     this.nomeProduto = resultado;
  //     this.lista = resultado.produtinho;
  //   }).catch(erro => {
  //     console.log('Erro ao buscar usuarios', erro)
  //   })

  ngOnInit() {
    localStorage.setItem("PrecoFinal", "0")
    this.carrinhoService.checarCarrinho(localStorage.getItem('EMAIL'))
      .then((resultado: any) => {
        for (let i = 0; i < resultado.length; i++) {
          console.log("1", resultado[i])
          this.produtosService.buscarCarinho(resultado[i].PRODUTOS_CODIGO)
            .then((resultado2: any) => {
              this.nomeProduto = resultado2.produtinho.NOME;
              console.log(i, resultado2.produtinho)
              this.lista[i] = resultado2.produtinho[0];


              let precoFinalTemp = parseFloat(localStorage.getItem("PrecoFinal")) + ((parseFloat(resultado2.produtinho[0].PRECO.replace("R$", "").replace(",", "."))))
              localStorage.setItem("PrecoFinal", JSON.stringify(precoFinalTemp));
              localStorage.setItem("Quantidade", JSON.stringify(this.quantidade));


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
  quantidade = 1;


  encaminhar(caminho) {
    this.router.navigate([caminho]);
    window.scrollTo(0, 0);
  }

  frete(cont) {
    this.contador = cont;
    console.log("123",this.lista.length);
  }

  endereco() {
    this.carrinhoService.endereco(this.pais, this.estado, this.cidade, this.bairro, this.cep, this.rua, this.numero)
      .then((resultado: any) => {

      }).catch((erro: any) => {
        console.log(erro);
      })

    if (this.pais != "") {
      if (this.estado != "") {
        if (this.cidade != "") {
          if (this.bairro != "") {
            if (this.cep != "") {
              if (this.rua != "") {
                if (this.numero != null) {
                  console.log("teste: ", parseFloat(localStorage.getItem("PrecoFinal")) + 20)
                  localStorage.setItem("PrecoFinal", JSON.stringify(parseFloat(localStorage.getItem("PrecoFinal")) + 20));
                  alert("Endereço adicionado ao frete!")
                  this.router.navigate(['/pagamento'])
                } else {
                  alert("Precisa registrar o numero!")
                }
              } else {
                alert("Precisa registrar a rua!")
              }
            } else {
              alert("Precisa registrar o cep!")
            }
          } else {
            alert("Precisa registrar o bairro!")
          }
        } else {
          alert("Precisa registrar a cidade!")
        }
      } else {
        alert("Precisa registrar o estado!")
      }
    } else {
      alert("Precisa registrar o pais!")
    }

  }

  removerCarrinho(codigo) {
    location.reload()
    console.log(localStorage.getItem("EMAIL"), codigo)
    this.carrinhoService.removerCarrinho(localStorage.getItem("EMAIL"), codigo)
      .then((resultado: any) => {

        console.log("REMOVEU", resultado)
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

  atualizarPrecoFinal(quant) {
    localStorage.setItem("Quantidade", quant)
  }

  cancelar() {
    this.contador = 0;
  }

  insta() {
    location.href = 'https://www.instagram.com/';
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
