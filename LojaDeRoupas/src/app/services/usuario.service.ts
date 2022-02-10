import { Injectable } from '@angular/core';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export default class UsuarioService {

  constructor() { }

  buscarUsuarios() {
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
    })
  }
}
