// --- Dependencies ---
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';

// --- Components ---
import { FormControl, FormGroup } from '@angular/forms';

// --- Interfaces ---
import { Select } from 'src/app/services/general.interfaces';
import { Product } from '../products.interfaces';

// --- Services ---
import { ProductosService } from '../productos.service';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
})
export class EditarComponent implements OnInit {
  private _id: string = '';

  public form = new FormGroup({
    Nombre_Producto: new FormControl(''),
    Peso_Producto: new FormControl(''),
    Dimensiones_Producto: new FormControl(''),
    Tipo_producto: new FormControl<Select>({ code: '', name: '' }),
    Estilo_Producto: new FormControl<Select>({ name: '', code: '' }),
  });

  public typeProducts: Select[] = [];
  public styleProducts: Select[] = [];

  onSubmit() {
    const Nombre_Producto = this.form.value.Nombre_Producto?.trim();
    const Peso_Producto = this.form.value.Peso_Producto;
    const Dimensiones_Producto = this.form.value.Dimensiones_Producto?.trim();
    const Tipo_producto = this.form.value.Tipo_producto?.code;
    const Estilo_Producto = this.form.value.Estilo_Producto?.code;

    if (
      Nombre_Producto &&
      Peso_Producto &&
      Dimensiones_Producto &&
      Tipo_producto &&
      Estilo_Producto
    ) {
      const body = {
        Nombre_Producto,
        Peso_Producto,
        Dimensiones_Producto,
        Tipo_producto,
        Estilo_Producto,
      };

      this._productsService.putProduct(body).subscribe((result) => {
        if ((result as any).msg === 'Registro actualizado') {
          this._messageService.add({
            key: 'toastError',
            severity: 'success',
            summary: 'Registro actualizado',
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
      if (!Nombre_Producto)
        document
          .getElementById('NombreProducto')
          ?.classList.add('ng-invalid', 'ng-dirty');

      if (!Peso_Producto)
        document
          .getElementById('PesoProducto')
          ?.classList.add('ng-invalid', 'ng-dirty');

      if (!Dimensiones_Producto)
        document
          .getElementById('DimensionesProducto')
          ?.classList.add('ng-invalid', 'ng-dirty');

      if (!Tipo_producto)
        document
          .getElementById('TipoProducto')
          ?.classList.add('ng-invalid', 'ng-dirty');

      if (!Estilo_Producto)
        document
          .getElementById('EstiloProducto')
          ?.classList.add('ng-invalid', 'ng-dirty');
    }
  }

  goToList() {
    this.router.navigateByUrl('productos/listar');
  }

  constructor(
    private router: Router,
    private _generalService: GeneralService,
    private _messageService: MessageService,
    private _productsService: ProductosService,
    private rutaActiva: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._id = this.rutaActiva.snapshot.params['id'];

    this._generalService
      .getCatalogType('Tipo productos')
      .subscribe((result) => {
        this.typeProducts = result;

        this._generalService
          .getCatalogType('Estilo producto')
          .subscribe((result) => {
            this.styleProducts = result;

            this._productsService
              .getProductsById(this._id)
              .subscribe((result) => {
                const data = [...(result as any)];

                const {
                  Nombre_Producto,
                  Peso_Producto,
                  Dimensiones_Producto,
                  Tipo_producto,
                  Estilo_Producto,
                } = data[0] as any;

                this.form.setValue({
                  Nombre_Producto,
                  Peso_Producto,
                  Dimensiones_Producto,
                  Tipo_producto: this.typeProducts.filter(
                    (element) => element.name === Tipo_producto
                  )[0],
                  Estilo_Producto: this.styleProducts.filter(
                    (element) => element.name === Estilo_Producto
                  )[0],
                });
              });
          });
      });
  }
}
