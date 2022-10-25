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

  constructor(private _catalogsService: CatalogosService) {}

  ngOnInit(): void {
    this._catalogsService.getAllCatalogs.subscribe((data) => {
      this.catalogs = data;
    });
  }
}
