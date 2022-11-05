// --- Dependencies ---
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// --- Services ---
import { ProductionsService } from '../productions.service';
import { MessageService } from 'primeng/api';

// --- Interfaces ---
import { ProductionList } from '../productions.interfaces';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {
  public productions: ProductionList[] = [];
  public id: string = '';

  goToAdd() {
    this._router.navigateByUrl('producciones/add');
  }

  goToEdit(id: string) {
    this._router.navigateByUrl(`producciones/editar/${id}`);
  }

  onChangeInput(value: string) {
    if (value) {
      this.id = value;
    } else {
      const subsPeople = this._productionService
        .getAllProductions()
        .subscribe(() => {
          subsPeople.unsubscribe();
        });
    }
  }

  searchContact() {
    this._productionService.getProductionById(this.id).subscribe(
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
          const subsCatalogs = this._productionService
            .getAllProductions()
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
    private _productionService: ProductionsService
  ) {}

  ngOnInit(): void {
    this._productionService.getAllProductions().subscribe();
    this._productionService.productions$.subscribe(
      (data) => (this.productions = data)
    );
  }
}
