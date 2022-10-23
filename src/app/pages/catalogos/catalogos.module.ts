// --- Dependencies ---
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// --- Modules ---
import { CatalogosRoutingModule } from './catalogos-routing.module';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';

// --- Components ---
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { ListarComponent } from './listar/listar.component';
import { CatalogosService } from './catalogos.service';

@NgModule({
  declarations: [AgregarComponent, EditarComponent, ListarComponent],
  imports: [
    CommonModule,
    CatalogosRoutingModule,
    ComponentsModule,
    LayoutsModule,
    HttpClientModule,
    PrimeNgModule,
  ],
  providers: [CatalogosService],
})
export class CatalogosModule {}
