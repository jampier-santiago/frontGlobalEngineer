// --- Dependencies ---
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

// --- Services ---
import { ContactosService } from '../contactos.service';
import { GeneralService } from 'src/app/services/general.service';

// --- Components ---
import { FormControl, FormGroup } from '@angular/forms';

// --- Interfaces ---
import { ContactType } from '../contactos.interfaces';
import { Select } from 'src/app/services/general.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarComponent implements OnInit {
  public contactType: ContactType[] = [];
  public people: Select[] = [];
  public form = new FormGroup({
    contactValue: new FormControl(''),
    nameContact: new FormControl<Select>({ code: '', name: '' }),
    typeContact: new FormControl<Select>({ name: '', code: '' }),
  });

  goToList() {
    this.router.navigateByUrl('contactos/listar');
  }

  onSubmit() {
    const Dato_Contacto = this.form.value.contactValue;
    const Encargado_Contacto = this.form.value.nameContact?.code;
    const Tipo_Contacto = this.form.value.typeContact?.code;

    if (Dato_Contacto && Encargado_Contacto && Tipo_Contacto) {
      const body = {
        Dato_Contacto,
        Encargado_Contacto,
        Tipo_Contacto,
      };

      this._contactoService.postContact(body).subscribe((result) => {
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
      if (!Dato_Contacto)
        document
          .getElementById('contactValue')
          ?.classList.add('ng-invalid', 'ng-dirty');

      if (!Encargado_Contacto)
        document
          .getElementById('nameContact')
          ?.classList.add('ng-invalid', 'ng-dirty');

      if (!Tipo_Contacto)
        document
          .getElementById('typeContact')
          ?.classList.add('ng-invalid', 'ng-dirty');
    }
  }

  constructor(
    private _contactoService: ContactosService,
    private router: Router,
    private _generalService: GeneralService,
    private _messageService: MessageService
  ) {}

  ngOnInit(): void {
    this._generalService
      .getCatalogType('contacto')
      .subscribe((data) => (this.contactType = data));

    this._generalService.getPeople().subscribe((data) => (this.people = data));
  }
}
