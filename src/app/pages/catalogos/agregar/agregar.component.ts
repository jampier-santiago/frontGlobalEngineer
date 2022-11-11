// --- Dependencies ---
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';

// --- Services ---
import { MessageService } from 'primeng/api';
import { CatalogosService } from '../catalogos.service';

// --- Interfaces ---
import { Select } from 'src/app/services/general.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarComponent implements OnInit {
  public groupCatalogs: Select[] = [];
  public form = new FormGroup({
    catalogName: new FormControl(''),
    catalogType: new FormControl<Select>({ code: '', name: '' }),
  });

  onSubmit() {
    if (this.form.value.catalogType && this.form.value.catalogName) {
      const dataForm = {
        Tipo_Catalogo: this.form.value.catalogType.name,
        Nombre_Catalogo: this.form.value.catalogName,
      };

      this._catalogService.postCatalog(dataForm).subscribe((response) => {
        if ((response as any).msg === 'Registro insertado') {
          this.messageService.add({
            key: 'toast',
            severity: 'success',
            summary: 'Registro agregado',
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
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
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
      .subscribe();
  }
}
