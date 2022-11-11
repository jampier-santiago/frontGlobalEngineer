// --- Dependencies ---
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// --- Services ---
import { GeneralService } from 'src/app/services/general.service';
import { MessageService } from 'primeng/api';
import { ProductionsService } from '../productions.service';

// --- Interfaces ---
import { Select } from 'src/app/services/general.interfaces';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarComponent implements OnInit {
  public people: Select[] = [];
  public product: Select[] = [];
  public currentDate: Date = new Date();

  public form = new FormGroup({
    Fecha_Produccion: new FormControl('', Validators.required),
    Id_Empleado_Produccion: new FormControl<Select>({ code: '', name: '' }),
    Id_Producto_Produccion: new FormControl<Select>({ code: '', name: '' }),
    num_totalProduccion: new FormControl(''),
    num_Defectuosos_Produccion: new FormControl(''),
  });

  goToList() {
    this.router.navigateByUrl('producciones/listar');
  }

  onSubmit() {
    const Fecha_Produccion = this.form.value.Fecha_Produccion?.trim();
    const Id_Empleado_Produccion = this.form.value.Id_Empleado_Produccion?.code;
    const Id_Producto_Produccion = this.form.value.Id_Producto_Produccion?.code;
    const num_totalProduccion = this.form.value.num_totalProduccion;
    const num_Defectuosos_Produccion =
      this.form.value.num_Defectuosos_Produccion;

    if (
      Fecha_Produccion &&
      Id_Empleado_Produccion &&
      Id_Producto_Produccion &&
      num_totalProduccion &&
      num_Defectuosos_Produccion
    ) {
      const body = {
        Fecha_Produccion,
        Id_Empleado_Produccion,
        Id_Producto_Produccion,
        num_totalProduccion,
        num_Defectuosos_Produccion,
      };

      this._productioService.postProduct(body).subscribe((response: any) => {
        if (response.msg === 'Registro insertado') {
          this.messageService.add({
            key: 'toast',
            severity: 'success',
            summary: 'Registro insertado',
            detail: 'Su registro fue insertado con exito',
          });
        } else {
          this.messageService.add({
            key: 'toast',
            severity: 'error',
            summary: 'Ocurrio un error',
            detail:
              'No se pudo ser insertado el registro, intentelo nuevamente',
          });
        }
      });
    } else {
      if (!Fecha_Produccion)
        document
          .getElementById('date')
          ?.classList.add('ng-invalid', 'ng-dirty');

      if (!Id_Empleado_Produccion)
        document
          .getElementById('nameContact')
          ?.classList.add('ng-invalid', 'ng-dirty');

      if (!Id_Producto_Produccion)
        document
          .getElementById('nameProduct')
          ?.classList.add('ng-invalid', 'ng-dirty');

      if (!num_totalProduccion)
        document
          .getElementById('totalProducts')
          ?.classList.add('ng-invalid', 'ng-dirty');

      if (!num_Defectuosos_Produccion)
        document
          .getElementById('defectiveProducts')
          ?.classList.add('ng-invalid', 'ng-dirty');
    }
  }

  constructor(
    private router: Router,
    private messageService: MessageService,
    private _generalService: GeneralService,
    private _productioService: ProductionsService
  ) {}

  ngOnInit(): void {
    this._generalService.getPeople().subscribe((data) => (this.people = data));

    this._productioService
      .getProducts()
      .subscribe((data) => (this.product = data));
  }
}
