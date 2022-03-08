import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
    private router: Router,
    private clienteService: ClienteService
  ) { }

  ngOnInit() {
    
  }
  nome:'';
  email:'';
  senha:'';
  nascimento: '';

  login() {
    this.clienteService.cadastro(this.nome, this.email, this.senha, this.nascimento)
      .then((resultado: any) => {
        alert("Você foi cadastrado!")
        if (resultado.cliente){
          this.router.navigate(['/login'])
        } else {
          console.log("Não fez login");
        }
      }).catch((erro: any) => {
        console.log(erro);
      })
  }

}
