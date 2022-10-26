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

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    MenubarModule,
    FieldsetModule,
    TableModule,
  ],
  exports: [
    InputTextModule,
    ButtonModule,
    MenubarModule,
    FieldsetModule,
    TableModule,
    ToastModule,
  ],
})
export class PrimeNgModule {}
