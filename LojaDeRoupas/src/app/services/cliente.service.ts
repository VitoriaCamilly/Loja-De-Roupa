import { Injectable } from '@angular/core';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  login(email, senha) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/login',
        {
          method: 'POST',
          body: JSON.stringify(
            {
              email: email, senha: senha
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

  cadastro(nome, email, senha, nascimento) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/criar_usuario',
        {
          method: 'POST',
          body: JSON.stringify(
            {
              nome: nome, email: email, senha: senha, nascimento: nascimento
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
  checarUser(email, senha) {
    return new Promise((resolve, reject) => {
      fetch('/api/checar_user',
        {
          method: 'POST',
          body: JSON.stringify({ email, senha }),
          headers: { 'Content-Type': 'application/json' }
        }
      ).then(result => result.json())
        .then(resolvido => resolve(resolvido))
        .catch(reject)
    })
  }
}