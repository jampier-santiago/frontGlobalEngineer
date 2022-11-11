// --- Dependencies ---
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, BehaviorSubject } from 'rxjs';

// --- Interfaces ---
import { Catalog } from './catalogos.interfaces';

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
  private _url: string = 'http://localhost:3000/catalogo';
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
      .get(this._url)
      .pipe(tap((response) => this._catalogs.next(response as any)));
  }

  getCatalogById(id: string | number) {
    return this._http
      .get(`${this._url}/${id}`)
      .pipe(tap((response) => this._catalogs.next(response as Catalog[])));
  }

  putCatalog(body: Catalog) {
    return this._http.put(this._url, body, httpOptions);
  }

  postCatalog(body: Catalog) {
    return this._http.post(this._url, body, httpOptions);
  }

  getCatalogType(type: string) {
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' }),
      params: new HttpParams().append('type', type),
    };

    return this._http
      .get(`http://localhost:3000/catalogo/tipos/data`, httpOptions)
      .pipe(tap((response) => this._catalogs.next(response as Catalog[])));
  }
}
