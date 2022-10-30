// --- Dependencies ---
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// --- Services ---
import { PersonasService } from '../personas.service';
import { MessageService } from 'primeng/api';

// --- Interfaces ---
import { Person } from '../personas.interfaces';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {
  public people: Person[] = [];
  public id: string = '';

  onChangeInput(value: string) {
    if (value) {
      this.id = value;
    } else {
      const subsPeople = this._personasService.getAllPeople().subscribe(() => {
        subsPeople.unsubscribe();
      });
    }
  }

  searchContact() {
    this._personasService.getPersonById(this.id).subscribe(
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
          const subsCatalogs = this._personasService
            .getAllPeople()
            .subscribe(() => {
              subsCatalogs.unsubscribe();
            });
        }
      }
    );
  }

  goToAdd() {
    this._router.navigateByUrl('personas/add');
  }

  goToEdit(id: string) {
    this._router.navigateByUrl(`personas/editar/${id}`);
  }

  constructor(
    private _personasService: PersonasService,
    private _messageService: MessageService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._personasService.getAllPeople().subscribe();
    this._personasService.people$.subscribe((data) => (this.people = data));
  }
}
