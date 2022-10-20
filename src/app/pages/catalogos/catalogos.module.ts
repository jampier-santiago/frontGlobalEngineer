import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogosRoutingModule } from './catalogos-routing.module';

import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { ListarComponent } from './listar/listar.component';
import { BuscarComponent } from './buscar/buscar.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AgregarComponent,
    EditarComponent,
    ListarComponent,
    BuscarComponent,
    LayoutComponent,
  ],
  imports: [CommonModule, CatalogosRoutingModule],
})
export class CatalogosModule {}
