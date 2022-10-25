// --- Dependencies ---
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// --- Interfaces ---
import { Catalog } from './listar/catalogos.interfaces';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class CatalogosService {
  constructor(private _http: HttpClient) {}

  getAllCatalogs = new Observable<Catalog[]>((subs) => {
    this._http
      .get('http://localhost:3000/catalogo', httpOptions)
      .subscribe((result) => {
        subs.next(result as any);
      });
  });
}
