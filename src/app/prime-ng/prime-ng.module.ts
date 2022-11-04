// --- Dependencies ---
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// --- Components ---
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    MenubarModule,
    FieldsetModule,
    TableModule,
    CascadeSelectModule,
    DropdownModule,
    InputSwitchModule,
  ],
  exports: [
    InputTextModule,
    ButtonModule,
    MenubarModule,
    FieldsetModule,
    TableModule,
    ToastModule,
    CascadeSelectModule,
    DropdownModule,
    InputSwitchModule,
  ],
})
export class PrimeNgModule {}
