// --- Dependencies ---
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// --- Services ---
import { MessageService } from 'primeng/api';
import { IngredientesXProductosService } from '../ingredientes-x-productos.service';

// --- Interfaces ---
import { IngredientesX_Producto } from '../ingredientes-x-producto.interfaces';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {
  public id: string = '';
  public elements: IngredientesX_Producto[] = [];

  goToAdd() {
    this._router.navigateByUrl('ingredientes-x-productos/add');
  }

  goToEdit(id: string) {
    this._router.navigateByUrl(`ingredientes-x-productos/editar/${id}`);
  }

  onChangeInput(value: string) {
    if (value) {
      this.id = value;
    } else {
      const subsCatalogs = this._ingredientesX_ProductosService
        .getAllElements()
        .subscribe(() => {
          subsCatalogs.unsubscribe();
        });
    }
  }

  searchElement() {
    this._ingredientesX_ProductosService.getElementById(this.id).subscribe(
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
          const subsCatalogs = this._ingredientesX_ProductosService
            .getAllElements()
            .subscribe(() => {
              subsCatalogs.unsubscribe();
            });
        }
      }
    );
  }

  constructor(
    private _messageService: MessageService,
    private _router: Router,
    private _ingredientesX_ProductosService: IngredientesXProductosService
  ) {}

  ngOnInit(): void {
    this._ingredientesX_ProductosService.getAllElements().subscribe();
    this._ingredientesX_ProductosService.elements$.subscribe(
      (data) => (this.elements = data)
    );
  }
}
