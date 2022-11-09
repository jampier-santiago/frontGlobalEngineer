// --- Dependencies ---
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

// --- Services ---
import { IngredientesXProductosService } from '../ingredientes-x-productos.service';

// --- Components ---
import { FormControl, FormGroup } from '@angular/forms';

// --- Interfaces ---
import { Select } from 'src/app/services/general.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarComponent implements OnInit {
  public products: Select[] = [];
  public ingredients: Select[] = [];

  public form = new FormGroup({
    IProducto_ingredientes_productos: new FormControl<Select>({
      code: '',
      name: '',
    }),
    ingrediente_ingredientes_productos: new FormControl<Select>({
      name: '',
      code: '',
    }),
    cantidad_ingredientes_productos: new FormControl(''),
  });

  goToList() {
    this.router.navigateByUrl('ingredientes-x-productos/listar');
  }

  onSubmit() {
    const IProducto_ingredientes_productos =
      this.form.value.IProducto_ingredientes_productos?.code;
    const ingrediente_ingredientes_productos =
      this.form.value.ingrediente_ingredientes_productos?.code;
    const cantidad_ingredientes_productos =
      this.form.value.cantidad_ingredientes_productos;

    if (
      IProducto_ingredientes_productos &&
      ingrediente_ingredientes_productos &&
      cantidad_ingredientes_productos
    ) {
      const body = {
        IProducto_ingredientes_productos,
        ingrediente_ingredientes_productos,
        cantidad_ingredientes_productos,
      };

      this._ingredientesX_ProductsoService
        .postProduct(body)
        .subscribe((result: any) => {
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
      if (!IProducto_ingredientes_productos)
        document
          .getElementById('IProducto_ingredientes_productos')
          ?.classList.add('ng-invalid', 'ng-dirty');

      if (!ingrediente_ingredientes_productos)
        document
          .getElementById('ingrediente_ingredientes_productos')
          ?.classList.add('ng-invalid', 'ng-dirty');

      if (!cantidad_ingredientes_productos)
        document
          .getElementById('cantidad_ingredientes_productos')
          ?.classList.add('ng-invalid', 'ng-dirty');
    }
  }

  constructor(
    private _ingredientesX_ProductsoService: IngredientesXProductosService,
    private router: Router,
    private _messageService: MessageService
  ) {}

  ngOnInit(): void {
    this._ingredientesX_ProductsoService
      .getProducts()
      .subscribe((response) => (this.products = response));

    this._ingredientesX_ProductsoService
      .getIngredients()
      .subscribe((response) => (this.ingredients = response));
  }
}
