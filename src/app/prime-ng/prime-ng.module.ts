import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  imports: [CommonModule, InputTextModule, ButtonModule, MenubarModule],
  exports: [InputTextModule, ButtonModule, MenubarModule],
})
export class PrimeNgModule {}
