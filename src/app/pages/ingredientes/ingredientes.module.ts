// --- Dependencies ---
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// --- Modules ---
import { IngredientesRoutingModule } from './ingredientes-routing.module';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { ComponentsModule } from 'src/app/components/components.module';

// --- Components ---
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';
import { AgregarComponent } from './agregar/agregar.component';

// --- Services ---
import { GeneralService } from 'src/app/services/general.service';
import { IngredientesService } from './ingredientes.service';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [ListarComponent, EditarComponent, AgregarComponent],
  imports: [
    CommonModule,
    IngredientesRoutingModule,
    LayoutsModule,
    HttpClientModule,
    PrimeNgModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentsModule,
  ],
  providers: [GeneralService, IngredientesService, MessageService],
})
export class IngredientesModule {}
