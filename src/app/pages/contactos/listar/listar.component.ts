// --- Dependencies ---
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// --- Services ---
import { MessageService } from 'primeng/api';
import { ContactosService } from '../contactos.service';

// --- interfaces ---
import { Contacto } from '../contactos.interfaces';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {
  public contacts: Contacto[] = [];
  public id: string = '';

  onChangeInput(value: string) {
    if (value) {
      this.id = value;
    } else {
      const subsCatalogs = this._contactoService
        .getAllContacts()
        .subscribe(() => {
          subsCatalogs.unsubscribe();
        });
    }
  }

  searchContact() {
    this._contactoService.getContactsById(this.id).subscribe(
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
          const subsCatalogs = this._contactoService
            .getAllContacts()
            .subscribe(() => {
              subsCatalogs.unsubscribe();
            });
        }
      }
    );
  }

  goToAdd() {
    this._router.navigateByUrl('contactos/add');
  }

  goToEdit(id: string) {
    this._router.navigateByUrl(`contactos/editar/${id}`);
  }

  constructor(
    private _contactoService: ContactosService,
    private _messageService: MessageService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._contactoService.getAllContacts().subscribe();
    this._contactoService.contacts$.subscribe((data) => (this.contacts = data));
  }
}
