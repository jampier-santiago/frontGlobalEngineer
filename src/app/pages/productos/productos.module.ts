// --- Dependencies ---
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// --- Modules ---
import { ProductosRoutingModule } from './productos-routing.module';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// --- Components ---
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ComponentsModule } from 'src/app/components/components.module';

// --- Services ---
import { GeneralService } from 'src/app/services/general.service';
import { ProductosService } from './productos.service';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [AgregarComponent, ListarComponent, EditarComponent],
  imports: [
    CommonModule,
    LayoutsModule,
    ProductosRoutingModule,
    PrimeNgModule,
    ComponentsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [GeneralService, ProductosService, MessageService],
})
export class ProductosModule {}
