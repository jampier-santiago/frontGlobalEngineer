import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { DashboardModule } from './pages/dashboard/dashboard.module';
import { HomeModule } from './pages/home/home.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HomeModule, DashboardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
