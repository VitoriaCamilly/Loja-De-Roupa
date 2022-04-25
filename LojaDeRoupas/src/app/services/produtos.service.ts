import { Injectable } from '@angular/core';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor() { }

  buscarProdutos(tipo) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/buscar_produtinhos',
        {
          method: 'POST',
          body: JSON.stringify(
            {
              tipo: tipo
            }
          ),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  buscarCarinho(codigo) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/buscar_produtosdocarinho',
        {
          method: 'POST',
          body: JSON.stringify(
            {
              codigo: codigo
            }
          ),
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

