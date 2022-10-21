// --- Dependencies ---
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// --- Components ---
import { HomeComponent } from './home.component';
import { ComponentsModule } from 'src/app/components/components.module';

// --- Services ---
import { HomeService } from './home.service';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, ComponentsModule],
  providers: [HomeService],
})
export class HomeModule {}
