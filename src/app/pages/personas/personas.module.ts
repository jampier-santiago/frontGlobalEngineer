import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonasRoutingModule } from './personas-routing.module';

import { LayoutComponent } from './layout/layout.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';
import { AgregarComponent } from './agregar/agregar.component';

@NgModule({
  declarations: [
    AgregarComponent,
    LayoutComponent,
    ListarComponent,
    BuscarComponent,
    EditarComponent,
  ],
  imports: [CommonModule, PersonasRoutingModule],
})
export class PersonasModule {}
