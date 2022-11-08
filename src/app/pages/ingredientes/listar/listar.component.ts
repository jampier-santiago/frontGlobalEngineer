// --- Dependencies ---
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// --- Services ---
import { MessageService } from 'primeng/api';
import { IngredientesService } from '../ingredientes.service';

// --- interfaces ---
import { Ingrediente } from '../ingredientes.list';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {
  public ingredientes: Ingrediente[] = [];
  public id: string = '';

  onChangeInput(value: string) {
    if (value) {
      this.id = value;
    } else {
      const subsCatalogs = this._ingredientesService
        .getAllIngredientes()
        .subscribe(() => {
          subsCatalogs.unsubscribe();
        });
    }
  }

  searchContact() {
    this._ingredientesService.getingredienteById(this.id).subscribe(
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
          const subsCatalogs = this._ingredientesService
            .getAllIngredientes()
            .subscribe(() => {
              subsCatalogs.unsubscribe();
            });
        }
      }
    );
  }

  goToAdd() {
    this._router.navigateByUrl('ingredientes/add');
  }

  goToEdit(id: string) {
    this._router.navigateByUrl(`ingredientes/editar/${id}`);
  }

  constructor(
    private _ingredientesService: IngredientesService,
    private _messageService: MessageService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._ingredientesService.getAllIngredientes().subscribe();
    this._ingredientesService.ingredientes$.subscribe(
      (data) => (this.ingredientes = data)
    );
  }
}
