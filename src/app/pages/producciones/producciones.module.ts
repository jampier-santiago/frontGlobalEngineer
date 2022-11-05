// --- Dependencies ---
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// --- Modules ---
import { ProduccionesRoutingModule } from './producciones-routing.module';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// --- Components ---
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';
import { AgregarComponent } from './agregar/agregar.component';

// --- Services ---
import { MessageService } from 'primeng/api';
import { GeneralService } from 'src/app/services/general.service';
import { ProductionsService } from './productions.service';

@NgModule({
  declarations: [AgregarComponent, ListarComponent, EditarComponent],
  imports: [
    CommonModule,
    LayoutsModule,
    PrimeNgModule,
    ComponentsModule,
    ProduccionesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [GeneralService, ProductionsService, MessageService],
})
export class ProduccionesModule {}
