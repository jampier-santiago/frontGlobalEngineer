// --- Dependencies ---
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// --- Services ---
import { ContactosService } from '../contactos.service';
import { GeneralService } from 'src/app/services/general.service';

// --- Components ---
import { FormControl, FormGroup, Validators } from '@angular/forms';

// --- Interfaces ---
import { Contacto, ContactType } from '../contactos.interfaces';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
})
export class EditarComponent implements OnInit {
  private _id: string = '';

  public typeSelected: any;
  public contactType: ContactType[] = [];
  public form = new FormGroup({
    contactValue: new FormControl('', Validators.required),
    contactType: new FormControl('', Validators.required),
    typeContact: new FormControl(),
  });

  goToList() {
    this.router.navigateByUrl('catalogos/listar');
  }

  constructor(
    private _contactoService: ContactosService,
    private router: Router,
    private _generalService: GeneralService
  ) {}

  ngOnInit(): void {
    this._generalService
      .getCatalogType('contacto')
      .subscribe((data) => (this.contactType = data as any));
  }
}
