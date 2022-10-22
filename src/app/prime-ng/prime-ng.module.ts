// --- Dependencies ---
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// --- Components ---
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    MenubarModule,
    FieldsetModule,
  ],
  exports: [InputTextModule, ButtonModule, MenubarModule, FieldsetModule],
})
export class PrimeNgModule {}
