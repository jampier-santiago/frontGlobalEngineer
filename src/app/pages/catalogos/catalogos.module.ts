// --- Dependencies ---
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// --- Modules ---
import { CatalogosRoutingModule } from './catalogos-routing.module';
import { LayoutsModule } from 'src/app/layouts/layouts.module';

// --- Components ---
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { ListarComponent } from './listar/listar.component';

@NgModule({
  declarations: [AgregarComponent, EditarComponent, ListarComponent],
  imports: [CommonModule, CatalogosRoutingModule, LayoutsModule],
})
export class CatalogosModule {}
