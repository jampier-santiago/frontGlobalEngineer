// --- Dependencies ---
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// --- Modulos ---
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// --- Components ---
import { ComponentsModule } from 'src/app/components/components.module';
import { InformesComponent } from './informes.component';

// --- Services ---
import { MessageService } from 'primeng/api';
import { GeneralService } from 'src/app/services/general.service';
import { InformesService } from './informes.service';

@NgModule({
  declarations: [InformesComponent],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    ReactiveFormsModule,
    PrimeNgModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [GeneralService, MessageService, InformesService],
})
export class InformesdModule {}
