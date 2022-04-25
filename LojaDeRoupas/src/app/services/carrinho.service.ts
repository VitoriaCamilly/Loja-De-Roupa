import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor(
    private router: Router
  ) { }

  endereco(pais, estado, cidade, bairro, cep, rua, numero) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/endereco',
        {
          method: 'POST',
          body: JSON.stringify(
            {
              pais:pais, estado:estado, cidade:cidade, bairro:bairro, cep:cep, rua:rua, numero:numero
            }
          ),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ).then(function (result) {
        resolvido(result.json());
      }).catch(function (erro) {
        console.log(erro);
        rejeitado(erro);
      })
    })
  }

  carrinho(qtdd, precofinal, email_cliente, produtos_codigo) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/carrinho',
        {
          method: 'POST',
          body: JSON.stringify(
            {
              qtdd:qtdd, precofinal:precofinal, email_cliente:email_cliente, produtos_codigo:produtos_codigo
            }
          ),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ).then(function (result) {
        resolvido(result.json());
      }).catch(function (erro) {
        console.log(erro);
        rejeitado(erro);
      })
    })
  }

  checarCarrinho(email_cliente) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/checar_carrinho',
        {
          method: 'POST',
          body: JSON.stringify(
            {
              email_cliente:email_cliente
            }
          ),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ).then(function (result) {
        resolvido(result.json());
      }).catch(function (erro) {
        console.log(erro);
        rejeitado(erro);
      })
    })
  }

  checarProduto(produtos_codigo) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/checar_produto',
        {
          method: 'POST',
          body: JSON.stringify(
            {
              produtos_codigo:produtos_codigo
            }
          ),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ).then(function (result) {
        resolvido(result.json());
      }).catch(function (erro) {
        console.log(erro);
        rejeitado(erro);
      })
    })
  }

  // addCarrinhoTemp(qtdd, precofinal, email_cliente, produtos_codigo){
  //   localStorage.setItem("Carrinho", JSON.stringify({ qtdd:qtdd, precofinal:precofinal, email_cliente:email_cliente, produtos_codigo:produtos_codigo}));
  //   this.router.navigate(['/carrinho']);
  // }

  removerCarrinho(email_cliente, produtos_codigo) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/removerCarrinho',
        {
          method: 'POST',
          body: JSON.stringify(
            {
              email_cliente:email_cliente, produtos_codigo:produtos_codigo
            }
          ),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ).then(function (result) {
        resolvido(result.json());
      }).catch(function (erro) {
        console.log(erro);
        rejeitado(erro);
      })
    })
  }

  confirmarCarrinho(email_cliente) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/confirmarCarrinho',
        {
          method: 'POST',
          body: JSON.stringify(
            {
              email_cliente:email_cliente
            }
          ),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ).then(function (result) {
        resolvido(result.json());
      }).catch(function (erro) {
        console.log(erro);
        rejeitado(erro);
      })
    })
  }

  trocarQuantidade(quantidade, produtos_codigo) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/Trocar_Quantidade',
        {
          method: 'POST',
          body: JSON.stringify(
            {
              quantidade:quantidade,produtos_codigo:produtos_codigo
            }
          ),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ).then(function (result) {
        resolvido(result.json());
      }).catch(function (erro) {
        console.log(erro);
        rejeitado(erro);
      })
    })
  }

}
