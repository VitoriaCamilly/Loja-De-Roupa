import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';
import {
  AuthService,
  GoogleLoginProvider
} from 'angular-6-social-login-v2';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
    private router: Router,
    private clienteService: ClienteService,
    private socialAuthService: AuthService
  ) { }

  ngOnInit() {

  }
  nome: '';
  email: '';
  senha: '';
  nascimento: '';

  login() {
    this.clienteService.cadastro(this.nome, this.email, this.senha, this.nascimento)
      .then((resultado: any) => {
        if (this.nome != '') {
          if (this.email != '') {
            if (this.senha != '') {
              if (this.nascimento != '') {
                alert("Você foi cadastrado!")
              } else {
                alert("Precisa informar sua data de Nascimento!")
              }
            } else {
              alert("Precisa informar a senha!")
            }
          } else {
            alert("Precisa informar o Email!")
          }
        } else {
          alert("Precisa informar o Nome!")
        }

        if (resultado.cliente) {
          this.router.navigate(['/cadastrado'])
        } else {
          console.log("Não fez login");
        }
      }).catch((erro: any) => {
        console.log(erro);
      })
  }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + " sign in data : ", userData);
        this.clienteService.checarGoogle(userData.email)
          .then((resultado: any) => {
            if (resultado == "") {    
              this.clienteService.cadastro(userData.name, userData.email, userData.id, "01-01-2001")
              localStorage.setItem("EMAIL", userData.email)
                localStorage.setItem("SENHA", userData.id)
                  this.router.navigate(['/inicio'])
                .then((resultado: any) => {
                    this.router.navigate(['/inicio'])
                }).catch((erro: any) => {
                  console.log(erro);
                })
            } else {
                localStorage.setItem("EMAIL", userData.email)
                localStorage.setItem("SENHA", userData.id)
                  this.router.navigate(['/inicio'])
            }
          }).catch((erro: any) => {
            console.log(erro);
          })
      }

    );
  }



}
