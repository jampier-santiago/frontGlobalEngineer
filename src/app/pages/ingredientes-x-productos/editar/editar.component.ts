// --- Dependencies ---
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

// --- Services ---
import { IngredientesXProductosService } from '../ingredientes-x-productos.service';

// --- Components ---
import { FormControl, FormGroup } from '@angular/forms';

// --- Interfaces ---
import { Select } from 'src/app/services/general.interfaces';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
})
export class EditarComponent implements OnInit {
  private _id: string = '';

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
        Id_ingredientes_productos: this._id,
        IProducto_ingredientes_productos,
        ingrediente_ingredientes_productos,
        cantidad_ingredientes_productos,
      };

      this._ingredientesX_ProductsoService
        .putProduct(body)
        .subscribe((result: any) => {
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
    private _activeRoute: ActivatedRoute,
    private _messageService: MessageService
  ) {}

  ngOnInit(): void {
    this._id = this._activeRoute.snapshot.params['id'];

    this._ingredientesX_ProductsoService.getProducts().subscribe((response) => {
      this.products = response;

      this._ingredientesX_ProductsoService
        .getIngredients()
        .subscribe((response) => {
          this.ingredients = response;

          this._ingredientesX_ProductsoService
            .getElementById(this._id)
            .subscribe((response: any) => {
              this.form.setValue({
                cantidad_ingredientes_productos:
                  response[0].cantidad_ingredientes_productos,
                ingrediente_ingredientes_productos: this.ingredients.find(
                  (item) =>
                    item.name === response[0].ingrediente_ingredientes_productos
                ) as any,
                IProducto_ingredientes_productos: this.products.find(
                  (item) =>
                    item.name === response[0].IProducto_ingredientes_productos
                ) as any,
              });
            });
        });
    });
  }
}
