// --- Dependencies ---
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, BehaviorSubject } from 'rxjs';

// --- Interfaces ---
import { Contacto } from './contactos.interfaces';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ContactosService {
  /**
   *
   * @private
   */
  private _url: string = 'http://localhost:3000/contactos';
  private _contactos: BehaviorSubject<Contacto[] | null> = new BehaviorSubject(
    null
  ) as BehaviorSubject<Contacto[] | null>;

  /**
   *
   * @get
  //  */
  get contacts$(): Observable<Contacto[]> {
    return this._contactos.asObservable() as Observable<Contacto[]>;
  }

  constructor(private _http: HttpClient) {}

  getAllContacts() {
    return this._http
      .get(this._url)
      .pipe(tap((response) => this._contactos.next(response as any)));
  }

  getContactsById(id: string) {
    return this._http
      .get(`${this._url}/${id}`)
      .pipe(tap((response) => this._contactos.next(response as Contacto[])));
  }
}
