// --- Dependencies ---
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// --- Modulos ---
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';

// --- Components ---
import { ComponentsModule } from 'src/app/components/components.module';
import { InformesComponent } from './informes.component';

@NgModule({
  declarations: [InformesComponent],
  imports: [CommonModule, ComponentsModule, PrimeNgModule, RouterModule],
})
export class InformesModule {}
