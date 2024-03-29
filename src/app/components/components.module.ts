// --- Dependencies ---
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';

// --- Components ---
import { FooterComponent } from './footer/footer.component';
import { TextInputComponent } from './text-input/text-input.component';
import { ButtonComponent } from './button/button.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    FooterComponent,
    TextInputComponent,
    ButtonComponent,
    MenuComponent,
  ],
  exports: [
    FooterComponent,
    TextInputComponent,
    ButtonComponent,
    MenuComponent,
  ],
  imports: [CommonModule, PrimeNgModule, FormsModule],
})
export class ComponentsModule {}
