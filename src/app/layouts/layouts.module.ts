// --- Components ---
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// --- Modulos ---
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';

// --- Components ---
import { DefaultLayoutComponent } from './default-layout/default-layout.component';

@NgModule({
  declarations: [DefaultLayoutComponent],
  imports: [CommonModule, ComponentsModule, RouterModule],
})
export class LayoutsModule {}
