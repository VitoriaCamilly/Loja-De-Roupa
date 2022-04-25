import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from '../Login/cadastro/cadastro.component';
import { CadastradoComponent } from './cadastrado/cadastrado.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CadastroComponent, CadastradoComponent]
})
export class LoginModule { }
