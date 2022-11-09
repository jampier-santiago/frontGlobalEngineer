// --- Dependencies ---
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

// --- Services ---
import { ContactosService } from '../contactos.service';
import { GeneralService } from 'src/app/services/general.service';

// --- Components ---
import { FormControl, FormGroup } from '@angular/forms';

// --- Interfaces ---
import { Select } from 'src/app/services/general.interfaces';
import { ContactType } from '../contactos.interfaces';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
})
export class EditarComponent implements OnInit {
  private _id: string = '';

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
        Id_Contactos: this._id,
        Dato_Contacto,
        Encargado_Contacto,
        Tipo_Contacto,
      };

      this._contactoService.putContact(body).subscribe((result) => {
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
    private _activeRoute: ActivatedRoute,
    private _generalService: GeneralService,
    private _messageService: MessageService
  ) {}

  ngOnInit(): void {
    this._id = this._activeRoute.snapshot.params['id'];

    this._generalService.getCatalogType('contacto').subscribe((data) => {
      this.contactType = data as any;

      this._generalService.getPeople().subscribe((data) => {
        this.people = data;

        this._contactoService.getContactsById(this._id).subscribe((result) => {
          this.form.setValue({
            contactValue: (result as any)[0].Dato_Contacto as string,
            nameContact: this.people.find(
              (value) =>
                value.name.split(' ')[0] === (result as any)[0].Nombre_contacto
            ) as any,
            typeContact: this.contactType.find(
              (value) => value.name === (result as any)[0].Tipo_Contacto
            ) as any,
          });
        });
      });
    });
  }
}
