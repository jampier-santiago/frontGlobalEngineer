// --- Dependencies ---
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, BehaviorSubject, map } from 'rxjs';
import { Select } from '../personas/personas.interfaces';

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

  putElement(body: IngredientesX_Producto) {
    return this._http.put(this._url, body, httpOptions);
  }

  postProduct(body: IngredientesX_Producto) {
    return this._http.post(this._url, body, httpOptions);
  }

  getProducts() {
    return this._http.get('http://localhost:3000/productos').pipe(
      map((item: any) => {
        const elements: Select[] = [];
        item.forEach((element: any) => {
          elements.push({
            name: element.Nombre_Producto,
            code: element.Id_Producto,
          });
        });
        return elements;
      })
    );
  }

  getIngredients() {
    return this._http.get('http://localhost:3000/ingredientes').pipe(
      map((item: any) => {
        const elements: Select[] = [];
        item.forEach((element: any) => {
          elements.push({
            name: element.Nombre_Ingrediente,
            code: element.Id_Ingrediente,
          });
        });
        return elements;
      })
    );
  }
}
