// --- Dependencies ---
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, BehaviorSubject } from 'rxjs';

// --- Interfaces ---
import { IngredientesX_Producto } from './ingredientes-x-producto.interfaces';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class IngredientesXProductosService {
  private _url: string = 'http://localhost:3000/materiales-productos';
  private _elements: BehaviorSubject<IngredientesX_Producto[] | null> =
    new BehaviorSubject(null) as BehaviorSubject<
      IngredientesX_Producto[] | null
    >;

  /**
   *
   * @get
   */
  get elements$(): Observable<IngredientesX_Producto[]> {
    return this._elements.asObservable() as Observable<
      IngredientesX_Producto[]
    >;
  }

  constructor(private _http: HttpClient) {}

  getAllElements() {
    return this._http
      .get(this._url)
      .pipe(tap((response) => this._elements.next(response as any)));
  }

  getElementById(id: string) {
    return this._http
      .get(`${this._url}/${id}`)
      .pipe(tap((response) => this._elements.next(response as any)));
  }
}
