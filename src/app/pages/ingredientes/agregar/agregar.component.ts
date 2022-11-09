// --- Dependencies ---
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

// --- Services ---
import { IngredientesService } from '../ingredientes.service';
import { GeneralService } from 'src/app/services/general.service';

// --- Components ---
import { FormControl, FormGroup } from '@angular/forms';

// --- Interfacces ---
import { Ingrediente } from '../ingredientes.interfaces';
import { Select } from 'src/app/services/general.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarComponent implements OnInit {
  public productStyle: Select[] = [];
  public useProduct: Select[] = [];
  public form = new FormGroup({
    Nombre_Ingrediente: new FormControl(''),
    Proveedor_Ingrediente: new FormControl(''),
    tel_Proveedor_Ingrediente: new FormControl(''),
    Uso_Ingrediente: new FormControl<Select>({ name: '', code: '' }),
    Tipo_Ingrediente: new FormControl<Select>({ name: '', code: '' }),
  });

  goToList() {
    this.router.navigateByUrl('ingredientes/listar');
  }

  onSubmit() {
    const Nombre_Ingrediente = this.form.value.Nombre_Ingrediente?.trim();
    const Proveedor_Ingrediente = this.form.value.Proveedor_Ingrediente?.trim();
    const tel_Proveedor_Ingrediente = this.form.value.tel_Proveedor_Ingrediente;
    const Uso_Ingrediente = this.form.value.Uso_Ingrediente?.code;
    const Tipo_Ingrediente = this.form.value.Tipo_Ingrediente?.code;

    if (
      Nombre_Ingrediente &&
      Proveedor_Ingrediente &&
      tel_Proveedor_Ingrediente &&
      Uso_Ingrediente &&
      Tipo_Ingrediente
    ) {
      const body = {
        Nombre_Ingrediente,
        Proveedor_Ingrediente,
        tel_Proveedor_Ingrediente,
        Uso_Ingrediente,
        Tipo_Ingrediente,
      };

      this._ingredientesService.postIngrediente(body).subscribe((result) => {
        if ((result as any).msg === 'Registro insertado') {
          this._messageService.add({
            key: 'toastError',
            severity: 'success',
            summary: 'Registro insertado',
            detail: 'El registro fue insertado con exito',
          });
        } else {
          this._messageService.add({
            key: 'toastError',
            severity: 'error',
            summary: 'Registro no actuallizado',
            detail: 'El registro no pudo ser insertado',
          });
        }
      });
    } else {
      if (!Nombre_Ingrediente)
        document
          .getElementById('Nombre_Ingrediente')
          ?.classList.add('ng-invalid', 'ng-dirty');

      if (!Proveedor_Ingrediente)
        document
          .getElementById('Proveedor_Ingrediente')
          ?.classList.add('ng-invalid', 'ng-dirty');

      if (!tel_Proveedor_Ingrediente)
        document
          .getElementById('tel_Proveedor_Ingrediente')
          ?.classList.add('ng-invalid', 'ng-dirty');

      if (!Uso_Ingrediente)
        document
          .getElementById('Uso_Ingrediente')
          ?.classList.add('ng-invalid', 'ng-dirty');

      if (!Tipo_Ingrediente)
        document
          .getElementById('Tipo_Ingrediente')
          ?.classList.add('ng-invalid', 'ng-dirty');
    }
  }

  constructor(
    private _ingredientesService: IngredientesService,
    private router: Router,
    private _generalService: GeneralService,
    private _messageService: MessageService
  ) {}

  ngOnInit(): void {
    this._generalService
      .getCatalogType('Tipo ingrediente')
      .subscribe((data) => {
        this.productStyle = data;
      });

    this._generalService.getCatalogType('Uso ingrediente').subscribe((data) => {
      this.useProduct = data;
    });
  }
}
