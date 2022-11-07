// --- Dependencies ---
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap, BehaviorSubject, map } from 'rxjs';

import { ProductionAdd, ProductionList } from './productions.interfaces';
import { Select } from 'src/app/services/general.interfaces';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ProductionsService {
  private _url: string = 'http://localhost:3000/producciones';
  private _productions: BehaviorSubject<ProductionList[] | null> =
    new BehaviorSubject(null) as BehaviorSubject<ProductionList[] | null>;

  get productions$(): Observable<ProductionList[]> {
    return this._productions.asObservable() as Observable<ProductionList[]>;
  }

  getAllProductions() {
    return this._http
      .get(this._url)
      .pipe(tap((response) => this._productions.next(response as any)));
  }

  getProductionById(id: string) {
    return this._http
      .get(`${this._url}/${id}`)
      .pipe(
        tap((response) => this._productions.next(response as ProductionList[]))
      );
  }

  getProducts() {
    return this._http.get('http://localhost:3000/productos').pipe(
      map((result) => {
        const dataResult = [...(result as any)];
        const temporaryData: Select[] = [];

        dataResult.forEach((item) => {
          temporaryData.push({
            name: item.Nombre_Producto,
            code: item.Id_Producto,
          });
        });

        return temporaryData;
      })
    );
  }

  putProduction(body: ProductionAdd) {
    return this._http.put(this._url, body, httpOptions);
  }

  postProduct(body: ProductionAdd) {
    return this._http.post(this._url, body, httpOptions);
  }

  constructor(private _http: HttpClient) {}
}
