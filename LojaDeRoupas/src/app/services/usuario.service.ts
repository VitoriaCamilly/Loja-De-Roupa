import { Injectable } from '@angular/core';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  buscarUsuarios(){
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/buscar_usuario',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ).then(resultado => resultado.json())
      .then(resolvido)
      .catch(rejeitado);
      
      
      

  // login(nickname, senha) {
  //   return new Promise((resolve, reject) => {
  //     fetch('/api/login',
  //       {
  //         method: 'POST',
  //         body: JSON.stringify(
  //           {
  //             nickname: nickname, senha: senha
  //           }
  //         ),
  //         headers: {
  //           'Content-Type': 'application/json'
  //         }
  //       }
  //     ).then(function (result) {
  //       return result.json();
  //     }).then(resolve).catch(reject);
  //   });
  // }

}

