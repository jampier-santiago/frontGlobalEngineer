import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AgregarComponent } from './agregar/agregar.component';
import { BuscarComponent } from './buscar/buscar.component';
import { EditarComponent } from './editar/editar.component';
import { LayoutComponent } from './layout/layout.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'agregar',
        component: AgregarComponent,
      },
      {
        path: 'editar',
        component: EditarComponent,
      },
      {
        path: 'buscar',
        component: BuscarComponent,
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
export class ProduccionesRoutingModule {}
