import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import UsuarioService from '../../services/usuario.service'

@Component({
  selector: 'app-cadastrado',
  templateUrl: './cadastrado.component.html',
  styleUrls: ['./cadastrado.component.css']
})
export class CadastradoComponent implements OnInit {

  constructor(
    private router: Router,
    private usuarioservico: UsuarioService
  ) { }

  ngOnInit() {
  }

  email = '';
  password = '';

  logar() {
    this.usuarioservico.buscarUsuarios()
      .then((resultado:any) => {

        const find = resultado.list.find(e => e.EMAIL == this.email && e.SENHA == this.password);

        if (find) {
          localStorage.setItem('USER', this.email);
          this.router.navigate(['/inicio']);
          console.log('Deu 2222');

        } else {
          alert('Usuário não cadastrado!');
          console.log('Não Deu 2222');
        }

      }).catch(erro => {
        console.log('Erro ao buscar usuarios', erro)
      })
  }

}
