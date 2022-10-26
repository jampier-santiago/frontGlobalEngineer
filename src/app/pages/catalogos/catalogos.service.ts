// --- Dependencies ---
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, BehaviorSubject } from 'rxjs';

// --- Interfaces ---
import { Catalog } from './listar/catalogos.interfaces';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class CatalogosService {
  /**
   *
   * @private
   */
  private _catalogs: BehaviorSubject<Catalog[] | null> = new BehaviorSubject(
    null
  ) as BehaviorSubject<Catalog[] | null>;

  /**
   *
   * @get
   */
  get catalogs$(): Observable<Catalog[]> {
    return this._catalogs.asObservable() as Observable<Catalog[]>;
  }

  constructor(private _http: HttpClient) {}

  getAllCatalogs() {
    return this._http
      .get('http://localhost:3000/catalogo', httpOptions)
      .pipe(tap((response) => this._catalogs.next(response as any)));
  }

  getCatalogById(id: string | number) {
    return this._http
      .get(`http://localhost:3000/catalogo/${id}`, httpOptions)
      .pipe(tap((response) => this._catalogs.next(response as any)));
  }
}
