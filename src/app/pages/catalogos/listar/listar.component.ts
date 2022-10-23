import { Component, OnInit } from '@angular/core';
import { CatalogosService } from '../catalogos.service';
import { Catalog } from './catalogos.interfaces';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {
  public catalogs: Catalog[] = [];

  // constructor(private _catalogsService: CatalogosService) {}
  constructor() {
    this.catalogs = [
      { Nombre_Catalogo: 'Celular', Tipo_Catalogo: 'Contacto', Id_Catalogo: 1 },
      { Nombre_Catalogo: 'Email', Tipo_Catalogo: 'Contacto', Id_Catalogo: 2 },
      {
        Nombre_Catalogo: 'Direccion',
        Tipo_Catalogo: 'Contacto',
        Id_Catalogo: 3,
      },
    ];
  }

  ngOnInit(): void {
    // this._catalogsService.getAllCatalogs();
  }
}
