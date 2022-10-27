// --- Dependencies ---
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

// --- Services ---
import { CatalogosService } from '../catalogos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarComponent implements OnInit {
  private _id: string = '';

  public form = new FormGroup({
    catalogName: new FormControl('', Validators.required),
    catalogType: new FormControl('', Validators.required),
  });

  onSubmit() {
    if (this.form.value.catalogType && this.form.value.catalogName) {
      const dataForm = {
        Tipo_Catalogo: this.form.value.catalogType,
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

  ngOnInit(): void {}
}
