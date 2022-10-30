// --- Dependencies ---
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// --- Modules ---
import { PersonasRoutingModule } from './personas-routing.module';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { HttpClientModule } from '@angular/common/http';

// --- Components ---
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';
import { AgregarComponent } from './agregar/agregar.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { ComponentsModule } from 'src/app/components/components.module';

// --- Servies ---
import { MessageService } from 'primeng/api';
import { GeneralService } from 'src/app/services/general.service';
import { PersonasService } from './personas.service';

@NgModule({
  declarations: [AgregarComponent, ListarComponent, EditarComponent],
  imports: [
    CommonModule,
    PersonasRoutingModule,
    LayoutsModule,
    PrimeNgModule,
    ComponentsModule,
    HttpClientModule,
  ],
  providers: [MessageService, GeneralService, PersonasService],
})
export class PersonasModule {}
