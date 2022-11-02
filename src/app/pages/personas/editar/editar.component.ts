// --- Dependenices ---
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

// --- Services ---
import { GeneralService } from 'src/app/services/general.service';
import { PersonasService } from '../personas.service';

// --- Interfaces ---
import { Select } from '../personas.interfaces';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
})
export class EditarComponent implements OnInit {
  private _id: string = '';
  public typesPeople: Select[] = [];
  public typesDocument: Select[] = [];
  public genders: Select[] = [
    { code: 'm', name: 'Masculino' },
    { code: 'f', name: 'Femenino' },
    { code: 'o', name: 'Otro' },
  ];

  public form = new FormGroup({
    personName: new FormControl('', Validators.required),
    personLastName: new FormControl('', Validators.required),
    personGender: new FormControl<Select>(
      { code: '', name: '' },
      Validators.required
    ),
    bornDate: new FormControl('', Validators.required),
    typeDocument: new FormControl<Select>(
      { code: '', name: '' },
      Validators.required
    ),
    rol: new FormControl<Select>({ code: '', name: '' }, Validators.required),
    documentNumber: new FormControl('', Validators.required),
  });

  goToList() {
    this.router.navigateByUrl('/personas/listar');
  }

  onSubmit() {
    const Nom1_Encargado = this.form.value.personName?.trim().split(' ')[0];
    const Nom2_Encargado =
      this.form.value.personName?.trim().split(' ')[1] || '';
    const Apell1_Encargado = this.form.value.personLastName
      ?.trim()
      .split(' ')[0];
    const Apell2_Encargado =
      this.form.value.personLastName?.trim().split(' ')[1] || '';
    const Sexo_Encargado = this.form.value.personGender?.name;
    const FechaNacimiento_Encargado = this.form.value.bornDate?.trim();
    const Tip_Doc_Encargado = this.form.value.typeDocument?.code;
    const num_Doc_Encargado = this.form.value.documentNumber;
    const Rol_Encargado = this.form.value.rol?.code;

    if (
      Nom1_Encargado &&
      Apell1_Encargado &&
      Sexo_Encargado &&
      FechaNacimiento_Encargado &&
      Tip_Doc_Encargado &&
      num_Doc_Encargado &&
      Rol_Encargado
    ) {
      this._personasService
        .putPerson({
          Id_Encargado: this._id,
          Apell1_Encargado,
          Apell2_Encargado,
          Nom1_Encargado,
          Nom2_Encargado,
          FechaNacimiento_Encargado,
          num_Doc_Encargado,
          Rol_Encargado,
          Sexo_Encargado,
          Tip_Doc_Encargado,
        })
        .subscribe((response) => {
          if ((response as any).msg === 'Registro actualizado') {
            this._messageService.add({
              key: 'toastError',
              severity: 'success',
              summary: 'Registro actuallizado',
              detail: 'El registro fue actualizado con exito',
            });
          }
        });
    } else {
      if (!Nom1_Encargado)
        (document.getElementById('personName') as HTMLDivElement).classList.add(
          'ng-invalid',
          'ng-dirty'
        );

      if (!Apell1_Encargado)
        (
          document.getElementById('personLastName') as HTMLDivElement
        ).classList.add('ng-invalid', 'ng-dirty');

      if (!FechaNacimiento_Encargado)
        (document.getElementById('bornDate') as HTMLDivElement).classList.add(
          'ng-invalid',
          'ng-dirty'
        );

      if (!Sexo_Encargado)
        (
          document.getElementById('label-gender') as HTMLLabelElement
        ).classList.add('error');

      if (!Tip_Doc_Encargado)
        (
          document.getElementById('label-type-document') as HTMLLabelElement
        ).classList.add('error');

      if (!num_Doc_Encargado)
        (
          document.getElementById('documentNumber') as HTMLDivElement
        ).classList.add('ng-invalid', 'ng-dirty');

      if (!Rol_Encargado)
        (
          document.getElementById('label-rol') as HTMLLabelElement
        ).classList.add('error');
    }
  }

  constructor(
    private router: Router,
    private rutaActiva: ActivatedRoute,
    private _generalService: GeneralService,
    private _personasService: PersonasService,
    private _messageService: MessageService
  ) {}

  ngOnInit(): void {
    this._id = this.rutaActiva.snapshot.params['id'];

    this._generalService.getCatalogType('rol empleado').subscribe((data) => {
      this.typesPeople = data;

      this._generalService
        .getCatalogType('Tipo documento')
        .subscribe((data) => {
          this.typesDocument = data;

          this._personasService
            .getPersonById(this.rutaActiva.snapshot.params['id'])
            .subscribe((data: any) => {
              const personData = { ...data[0] };

              this.form.setValue({
                personName: `${personData.Nom1_Encargado} ${personData.Nom2_Encargado}`,
                personLastName: `${personData.Apell1_Encargado} ${personData.Apell2_Encargado}`,
                bornDate: personData.FechaNacimiento_Encargado,
                documentNumber: personData.num_Doc_Encargado,
                personGender: {
                  code:
                    personData.num_Doc_Encargado === 'Masculino' ? 'm' : 'f',
                  name: personData.num_Doc_Encargado,
                },
                rol: this.typesPeople.filter(
                  (value) => value.name === personData.Rol_Encargado
                )[0] as any,
                typeDocument: this.typesDocument.filter(
                  (value) => value.name === personData.Tip_Doc_Encargado
                )[0] as any,
              });
            });
        });
    });
  }
}
