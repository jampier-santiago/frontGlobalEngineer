// --- Dependencies ---
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, BehaviorSubject } from 'rxjs';

// --- Interfaces ---
import { Ingrediente } from './ingredientes.interfaces';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class IngredientesService {
  /**
   *
   * @private
   */
  private _url: string = 'http://localhost:3000/ingredientes';
  private _ingredientes: BehaviorSubject<Ingrediente[] | null> =
    new BehaviorSubject(null) as BehaviorSubject<Ingrediente[] | null>;

  /**
   *
   * @get
  //  */
  get ingredientes$(): Observable<Ingrediente[]> {
    return this._ingredientes.asObservable() as Observable<Ingrediente[]>;
  }

  constructor(private _http: HttpClient) {}

  getAllIngredientes() {
    return this._http
      .get('http://localhost:3000/ingredientes')
      .pipe(
        tap((response) => this._ingredientes.next(response as Ingrediente[]))
      );
  }

  getingredienteById(id: string) {
    return this._http
      .get(`${this._url}/${id}`)
      .pipe(
        tap((response) => this._ingredientes.next(response as Ingrediente[]))
      );
  }

  putIngrediente(body: Ingrediente) {
    return this._http.put(this._url, body, httpOptions);
  }

  postIngrediente(body: Ingrediente) {
    return this._http.post(this._url, body, httpOptions);
  }
}
