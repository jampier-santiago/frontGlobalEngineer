// --- Dependencies ---
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// --- Modulos --
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { HomeModule } from './pages/home/home.module';
import { InformesdModule } from './pages/informes/informes.module';

// --- Components ---
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeModule,
    DashboardModule,
    InformesdModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
