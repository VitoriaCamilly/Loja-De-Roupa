import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoletoService {

  constructor() { }

  boleto(codigo, carrinho_codigo) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/boleto',
        {
          method: 'POST',
          body: JSON.stringify(
            {
              codigo: codigo, carrinho_codigo: carrinho_codigo
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
