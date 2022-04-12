import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartaoService {

  constructor() { }

  cadastroCartao(numCartao, mesValidade, anoValidade, codigoSeguranca, nomeCartao, cliente_email, carrinho_codigo) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/criar_usuario',
        {
          method: 'POST',
          body: JSON.stringify(
            {
              numCartao: numCartao, mesValidade: mesValidade, anoValidade: anoValidade, codigoSeguranca: codigoSeguranca,
              nomeCartao: nomeCartao, cliente_email: cliente_email, carrinho_codigo: carrinho_codigo
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