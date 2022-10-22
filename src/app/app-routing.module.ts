// --- Dependencies ---
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// --- Components ---
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { InformesComponent } from './pages/informes/informes.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'catalogos',
    loadChildren: () =>
      import('./pages/catalogos/catalogos.module').then(
        (m) => m.CatalogosModule
      ),
  },
  {
    path: 'contactos',
    loadChildren: () =>
      import('./pages/contactos/contactos.module').then(
        (m) => m.ContactosModule
      ),
  },
  {
    path: 'informes',
    component: InformesComponent,
  },
  {
    path: 'ingredientes',
    loadChildren: () =>
      import('./pages/ingredientes/ingredientes.module').then(
        (m) => m.IngredientesModule
      ),
  },
  {
    path: 'ingredientes-x-productos',
    loadChildren: () =>
      import(
        './pages/ingredientes-x-productos/ingredientes-x-productos.module'
      ).then((m) => m.IngredientesXProductosModule),
  },
  {
    path: 'personas',
    loadChildren: () =>
      import('./pages/personas/personas.module').then((m) => m.PersonasModule),
  },
  {
    path: 'producciones',
    loadChildren: () =>
      import('./pages/producciones/producciones.module').then(
        (m) => m.ProduccionesModule
      ),
  },
  {
    path: 'productos',
    loadChildren: () =>
      import('./pages/productos/productos.module').then(
        (m) => m.ProductosModule
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
