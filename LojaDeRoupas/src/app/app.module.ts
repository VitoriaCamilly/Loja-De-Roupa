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

const routes: Routes = [
  { path: '', component: CadastroComponent }, 
  { path: 'inicio', component: InicioComponent},
  { path: 'vestidos', component: VestidosComponent},
  { path: 'blusas', component: BlusasComponent},
  { path: 'casacos', component: CasacosComponent},
  { path: 'conjuntos', component: ConjuntosComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    LoginModule,
    PgprincipalModule,
    VestidosModule,
    BlusasModule,
    CasacosModule,
    ConjuntosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
