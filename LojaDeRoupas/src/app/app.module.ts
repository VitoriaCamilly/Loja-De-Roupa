import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { LoginModule } from './login/login.module';
import { CadastroComponent } from './Login/cadastro/cadastro.component';
import { InicioComponent } from './pgprincipal/inicio/inicio.component';
import { PgprincipalModule } from './pgprincipal/pgprincipal.module';
import { VestidosComponent } from './vestidos/vestidos/vestidos.component';
import { VestidosModule } from './vestidos/vestidos.module';
import { ConjuntosComponent } from './conjuntos/conjuntos/conjuntos.component';
import { ConjuntosModule } from './conjuntos/conjuntos.module';
import { CasacosComponent } from './casacos/casacos/casacos.component';
import { CasacosModule } from './casacos/casacos.module';
import { BlusasComponent } from './blusas/blusas/blusas.component';
import { BlusasModule } from './blusas/blusas.module';
import { PijamaComponent } from './pijama/pijama/pijama.component';
import { PijamaModule } from './pijama/pijama.module';
import { CadastradoComponent } from './login/cadastrado/cadastrado.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { FormsModule } from '@angular/forms';
import CheckLogged from './CheckLogged';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  LinkedinLoginProvider,
  VkontakteLoginProvider,
} from "angular-6-social-login-v2";


const routes: Routes = [
  { path: '', component: CadastroComponent, canActivate: []}, 
  { path: 'cadastrado', component: CadastradoComponent, canActivate: []},
  { path: 'inicio', component: InicioComponent, canActivate: [CheckLogged]},
  { path: 'vestidos', component: VestidosComponent, canActivate: [CheckLogged]},
  { path: 'blusas', component: BlusasComponent, canActivate: [CheckLogged]},
  { path: 'casacos', component: CasacosComponent, canActivate: [CheckLogged]},
  { path: 'conjuntos', component: ConjuntosComponent, canActivate: [CheckLogged]},
  { path: 'pijama', component: PijamaComponent, canActivate: [CheckLogged]},
  { path: 'carrinho', component: CarrinhoComponent, canActivate: [CheckLogged]},
  { path: 'pagamento', component: PagamentoComponent, canActivate: [CheckLogged]}
];

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("Your-Facebook-app-id")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("Your-Google-Client-Id")
        },
        {
          id: VkontakteLoginProvider.PROVIDER_ID,
          provider: new VkontakteLoginProvider("Your-VK-Client-Id")
        },        
          {
            id: LinkedinLoginProvider.PROVIDER_ID,
            provider: new LinkedinLoginProvider("1098828800522-m2ig6bieilc3tpqvmlcpdvrpvn86q4ks.apps.googleusercontent.com")
          },
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    CarrinhoComponent,
    PagamentoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    LoginModule,
    PgprincipalModule,
    VestidosModule,
    BlusasModule,
    CasacosModule,
    ConjuntosModule,
    PijamaModule,
    FormsModule,
    SocialLoginModule
  ],
  providers: [CheckLogged, {
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})

export class AppModule { }
