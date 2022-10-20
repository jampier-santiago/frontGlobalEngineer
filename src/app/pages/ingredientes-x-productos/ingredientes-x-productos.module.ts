import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientesX_productosRoutingModule } from './ingredientes-x-productos-routing.module';

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
  imports: [CommonModule, IngredientesX_productosRoutingModule],
})
export class IngredientesXProductosModule {}
