// --- Dependencies ---
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// --- Modules ---
import { IngredientesRoutingModule } from './ingredientes-routing.module';
import { LayoutsModule } from 'src/app/layouts/layouts.module';

// --- Components ---
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';
import { AgregarComponent } from './agregar/agregar.component';

@NgModule({
  declarations: [ListarComponent, EditarComponent, AgregarComponent],
  imports: [CommonModule, IngredientesRoutingModule, LayoutsModule],
})
export class IngredientesModule {}
