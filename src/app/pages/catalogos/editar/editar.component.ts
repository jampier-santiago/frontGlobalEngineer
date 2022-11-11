// --- Dependencies ---
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

// --- Services ---
import { CatalogosService } from '../catalogos.service';

// --- Interfaces ---
import { Catalog } from '../catalogos.interfaces';
import { Select } from 'src/app/services/general.interfaces';
import { tap } from 'rxjs';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
})
export class EditarComponent implements OnInit {
  private _id: string = '';

  public groupCatalogs: Select[] = [];
  public form = new FormGroup({
    catalogName: new FormControl(''),
    catalogType: new FormControl<Select>({ code: '', name: '' }),
  });

  onSubmit() {
    if (this.form.value.catalogType && this.form.value.catalogName) {
      const dataForm = {
        Id_Catalogo: this._id,
        Tipo_Catalogo: this.form.value.catalogType.name,
        Nombre_Catalogo: this.form.value.catalogName,
      };

      this._catalogService.putCatalog(dataForm).subscribe((response) => {
        if ((response as any).msg === 'Registro actualizado') {
          this.messageService.add({
            key: 'toast',
            severity: 'success',
            summary: 'Registro Actualizado',
            detail: 'Su registro se actualizo con exito',
          });
        } else {
          this.messageService.add({
            key: 'toast',
            severity: 'error',
            summary: 'Ocurrio un error',
            detail: 'No se pudo actualizar el registro, intentelo nuevamente',
          });
        }
      });
    }
  }

  goToList() {
    this.router.navigateByUrl('catalogos/listar');
  }

  constructor(
    private _catalogService: CatalogosService,
    private rutaActiva: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this._id = this.rutaActiva.snapshot.params['id'];

    this._catalogService
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
      .subscribe(() => {
        this._catalogService
          .getCatalogById(this.rutaActiva.snapshot.params['id'])
          .subscribe((response) => {
            if (response && (response as Catalog[]).length) {
              this.form.setValue({
                catalogName: (response as Catalog[])[0].Nombre_Catalogo,
                catalogType: this.groupCatalogs.find(
                  (element) =>
                    element.name === (response as Catalog[])[0].Tipo_Catalogo
                ) as any,
              });
            }
          });
      });
  }
}
