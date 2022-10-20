import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformesRoutingModule } from './informes-routing.module';

import { LayoutComponent } from './layout/layout.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';
import { AgregarComponent } from './agregar/agregar.component';

@NgModule({
  declarations: [
    LayoutComponent,
    BuscarComponent,
    ListarComponent,
    EditarComponent,
    AgregarComponent,
  ],
  imports: [CommonModule, InformesRoutingModule],
})
export class InformesModule {}
