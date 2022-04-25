import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.service'

@Component({
  selector: 'app-cadastrado',
  templateUrl: './cadastrado.component.html',
  styleUrls: ['./cadastrado.component.css']
})
export class CadastradoComponent implements OnInit {

  constructor(
    private router: Router,
    private clienteService: ClienteService
  ) { }

  ngOnInit() {
  }

  email = '';
  senha = '';

  login() {
    this.clienteService.checarUser(this.email, this.senha)
    .then((resultado: any) => {
      if (resultado != "") {
        localStorage.setItem("EMAIL", this.email)
        localStorage.setItem("SENHA", this.senha)
          this.router.navigate(['/inicio'])
      }
    }).catch((erro: any) => {
      console.log(erro);
    })
  }
}
