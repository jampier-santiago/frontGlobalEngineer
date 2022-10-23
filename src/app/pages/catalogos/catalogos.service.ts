import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CatalogosService {
  constructor(private _http: HttpClient) {}

  getAllCatalogs() {
    this._http.get('https://localhost:3000/catalogo').subscribe((result) => {
      console.log('🤦‍♂️', result);
    });
  }
}
