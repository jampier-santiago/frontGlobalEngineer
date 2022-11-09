// --- Dependencies ---
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// --- Modules ---
import { IngredientesX_productosRoutingModule } from './ingredientes-x-productos-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

// --- Components ---
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';
import { AgregarComponent } from './agregar/agregar.component';

// --- Services ---
import { MessageService } from 'primeng/api';
import { GeneralService } from 'src/app/services/general.service';
import { IngredientesXProductosService } from './ingredientes-x-productos.service';

@NgModule({
  declarations: [ListarComponent, EditarComponent, AgregarComponent],
  imports: [
    CommonModule,
    IngredientesX_productosRoutingModule,
    HttpClientModule,
    PrimeNgModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentsModule,
  ],
  providers: [MessageService, GeneralService, IngredientesXProductosService],
})
export class IngredientesXProductosModule {}
