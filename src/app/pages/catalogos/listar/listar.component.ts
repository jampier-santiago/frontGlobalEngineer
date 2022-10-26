import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

import { CatalogosService } from '../catalogos.service';
import { Catalog } from './catalogos.interfaces';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {
  public catalogs: Catalog[] = [];
  public id: string = '';

  onChangeInput(value: string) {
    if (value) {
      this.id = value;
    } else {
      const subsCatalogs = this._catalogsService
        .getAllCatalogs()
        .subscribe(() => {
          subsCatalogs.unsubscribe();
        });
    }
  }

  searchCatalog() {
    this._catalogsService.getCatalogById(this.id).subscribe(
      () => {},
      (error) => {
        if (error.status === 404 || error.status === '404') {
          this.id = '';
          this.messageService.add({
            key: 'toastError',
            severity: 'error',
            summary: 'Error en la busqueda',
            detail: 'No se encontro ningun elemento relacionado a su busqueda',
          });
          const subsCatalogs = this._catalogsService
            .getAllCatalogs()
            .subscribe(() => {
              subsCatalogs.unsubscribe();
            });
        }
      }
    );
  }

  constructor(
    private _catalogsService: CatalogosService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this._catalogsService.getAllCatalogs().subscribe();
    this._catalogsService.catalogs$.subscribe((data) => (this.catalogs = data));
  }
}
