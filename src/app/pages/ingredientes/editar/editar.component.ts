// --- Dependencies ---
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// --- Services ---
import { IngredientesService } from '../ingredientes.service';
import { GeneralService } from 'src/app/services/general.service';

// --- Components ---
import { FormControl, FormGroup } from '@angular/forms';

// --- Interfaces ---
import { Ingrediente } from '../ingredientes.list';
import { Select } from 'src/app/services/general.interfaces';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
})
export class EditarComponent implements OnInit {
  private _id: string = '';

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
        Id_Ingrediente: this._id,
        Nombre_Ingrediente,
        Proveedor_Ingrediente,
        tel_Proveedor_Ingrediente,
        Uso_Ingrediente,
        Tipo_Ingrediente,
      };

      this._ingredientesService.putIngrediente(body).subscribe((result) => {
        if ((result as any).msg === 'Registro actualizado') {
          this._messageService.add({
            key: 'toastError',
            severity: 'success',
            summary: 'Registro actuallizado',
            detail: 'El registro fue actualizado con exito',
          });
        } else {
          this._messageService.add({
            key: 'toastError',
            severity: 'error',
            summary: 'Registro no actuallizado',
            detail: 'El registro no pudo ser actualizado',
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
    private _activeRoute: ActivatedRoute,
    private _generalService: GeneralService,
    private _messageService: MessageService
  ) {}

  ngOnInit(): void {
    this._id = this._activeRoute.snapshot.params['id'];

    this._generalService
      .getCatalogType('Tipo ingrediente')
      .subscribe((data) => {
        this.productStyle = data;

        this._generalService
          .getCatalogType('Uso ingrediente')
          .subscribe((data) => {
            this.useProduct = data;

            this._ingredientesService
              .getingredienteById(this._id)
              .subscribe((response: any) => {
                this.form.setValue({
                  Nombre_Ingrediente: response[0].Nombre_Ingrediente,
                  Proveedor_Ingrediente: response[0].Proveedor_Ingrediente,
                  tel_Proveedor_Ingrediente:
                    response[0].tel_Proveedor_Ingrediente,
                  Tipo_Ingrediente: this.productStyle.find(
                    (element) => element.name === response[0].Tipo_Ingrediente
                  ) as any,
                  Uso_Ingrediente: this.useProduct.find(
                    (element) => element.name === response[0].Uso_Ingrediente
                  ) as any,
                });
              });
          });
      });
  }
}
