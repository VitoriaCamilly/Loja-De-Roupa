import { Injectable } from '@angular/core';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor() { }

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
}

