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
        if (this.nome != ''){
          if (this.email != '') {
            if (this.senha != '') {
              if (this.nascimento != '') {
                alert("Você foi cadastrado!")
              }else {
                alert("Precisa informar sua data de Nascimento!")
              }
            }else {
              alert("Precisa informar a senha!")
            }
          }else {
            alert("Precisa informar o Email!")
          }
        }else {
          alert("Precisa informar o Nome!")
        }
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
