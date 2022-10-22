// --- Dependencies ---
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// --- Modulos ---
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';

// --- Components ---
import { DashboardComponent } from './dashboard.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, RouterModule, ComponentsModule, PrimeNgModule],
})
export class DashboardModule {}
