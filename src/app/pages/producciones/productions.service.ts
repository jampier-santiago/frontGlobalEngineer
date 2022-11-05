// --- Dependencies ---
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap, BehaviorSubject } from 'rxjs';

import { ProductionList } from './productions.interfaces';

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

  constructor(private _http: HttpClient) {}
}
