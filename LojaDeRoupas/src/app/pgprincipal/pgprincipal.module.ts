import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { VestidosComponent } from 'src/app/vestidos/vestidos/vestidos.component';
import { VestidosModule } from 'src/app/vestidos/vestidos.module';
import { ConjuntosModule } from 'src/app/conjuntos/conjuntos.module';
import { ConjuntosComponent } from 'src/app/conjuntos/conjuntos/conjuntos.component';
import { PijamaComponent } from 'src/app/pijama/pijama/pijama.component';
import { PijamaModule } from 'src/app/pijama/pijama.module';
import { BlusasComponent } from 'src/app/blusas/blusas/blusas.component';
import { BlusasModule } from 'src/app/blusas/blusas.module';


@NgModule({
  imports: [
    CommonModule,
    VestidosModule,
    ConjuntosModule,
    BlusasModule,
    PijamaModule
  ],
  declarations: [InicioComponent]
})
export class PgprincipalModule { }




