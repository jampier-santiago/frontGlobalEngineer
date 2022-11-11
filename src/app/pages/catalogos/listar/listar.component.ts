// --- Dependencies ---
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

// --- Services ---
import { CatalogosService } from '../catalogos.service';

// --- Interfaces ---
import { Catalog } from '../catalogos.interfaces';
import { Select } from 'src/app/services/general.interfaces';
import { tap } from 'rxjs';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {
  public catalogs: Catalog[] = [];
  public id: string = '';
  public searchById: boolean = true;
  public groupCatalogs: Select[] = [];

  selectTypeCatalog(event: any) {
    const type = event.value.name;
    this._catalogsService.getCatalogType(type).subscribe();
  }

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
          this._messageService.add({
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

  goToEdit(id: string) {
    this._router.navigateByUrl(`catalogos/editar/${id}`);
  }

  goToAdd() {
    this._router.navigateByUrl('catalogos/add');
  }

  constructor(
    private _catalogsService: CatalogosService,
    private _messageService: MessageService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._catalogsService
      .getAllCatalogs()
      .pipe(
        tap((data) => {
          const elements: string[] = [];
          const dataSelect: Select[] = [];

          (data as any).forEach((element: any) => {
            if (!elements.includes(element.Tipo_Catalogo)) {
              elements.push(element.Tipo_Catalogo);
              dataSelect.push({
                code: dataSelect.length.toString(),
                name: element.Tipo_Catalogo,
              });
            }
          });

          this.groupCatalogs = dataSelect;
        })
      )
      .subscribe();

    this._catalogsService.catalogs$.subscribe((data) => (this.catalogs = data));
  }
}
