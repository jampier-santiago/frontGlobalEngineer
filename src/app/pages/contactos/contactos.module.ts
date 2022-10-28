// --- Dependencies ---
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// --- Modules ---
import { ContactosRoutingModule } from './contactos-routing.module';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { ComponentsModule } from 'src/app/components/components.module';

// --- Services ---
import { ContactosService } from './contactos.service';
import { MessageService } from 'primeng/api';

// --- Components ---
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';
import { AgregarComponent } from './agregar/agregar.component';

@NgModule({
  declarations: [ListarComponent, EditarComponent, AgregarComponent],
  imports: [
    CommonModule,
    ContactosRoutingModule,
    LayoutsModule,
    ComponentsModule,
    HttpClientModule,
    PrimeNgModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [ContactosService, MessageService],
})
export class ContactosModule {}
