import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [CommonModule, InputTextModule, ButtonModule],
  exports: [InputTextModule, ButtonModule],
})
export class PrimeNgModule {}
