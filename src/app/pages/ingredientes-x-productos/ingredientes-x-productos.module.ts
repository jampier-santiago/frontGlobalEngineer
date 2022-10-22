// --- Dependencies ---
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// --- Modules ---
import { IngredientesX_productosRoutingModule } from './ingredientes-x-productos-routing.module';

// --- Components ---
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';
import { AgregarComponent } from './agregar/agregar.component';

@NgModule({
  declarations: [ListarComponent, EditarComponent, AgregarComponent],
  imports: [CommonModule, IngredientesX_productosRoutingModule],
})
export class IngredientesXProductosModule {}
