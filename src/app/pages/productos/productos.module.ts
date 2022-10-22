// --- Dependencies ---
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// --- Modules ---
import { ProductosRoutingModule } from './productos-routing.module';
import { LayoutsModule } from 'src/app/layouts/layouts.module';

// --- Components ---
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';
import { AgregarComponent } from './agregar/agregar.component';

@NgModule({
  declarations: [AgregarComponent, ListarComponent, EditarComponent],
  imports: [CommonModule, LayoutsModule, ProductosRoutingModule],
})
export class ProductosModule {}
