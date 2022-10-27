// --- Dependencies ---
import { NgModule } from '@angular/core';

// --- Modules ---
import { RouterModule, Routes } from '@angular/router';

// --- Components ---
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { DefaultLayoutComponent } from 'src/app/layouts/default-layout/default-layout.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'agregar',
        component: AgregarComponent,
      },
      {
        path: 'editar/:id',
        component: EditarComponent,
      },
      {
        path: 'listar',
        component: ListarComponent,
      },
      {
        path: '**',
        redirectTo: 'agregar',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngredientesX_productosRoutingModule {}
