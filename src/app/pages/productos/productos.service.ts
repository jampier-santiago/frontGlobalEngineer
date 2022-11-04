// --- Dependencies ---
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, BehaviorSubject } from 'rxjs';

// --- Interfaces ---
import { Product } from './products.interfaces';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private _url: string = 'http://localhost:3000/productos';
  private _products: BehaviorSubject<Product[] | null> = new BehaviorSubject(
    null
  ) as BehaviorSubject<Product[] | null>;

  /**
   *
   * @get
   */
  get product$(): Observable<Product[]> {
    return this._products.asObservable() as Observable<Product[]>;
  }

  constructor(private _http: HttpClient) {}

  getAllProducts() {
    return this._http
      .get(this._url)
      .pipe(tap((response) => this._products.next(response as any)));
  }

  getProductsById(id: string) {
    return this._http
      .get(`${this._url}/${id}`)
      .pipe(tap((response) => this._products.next(response as Product[])));
  }

  postProduct(body: Product) {
    return this._http.post(this._url, body, httpOptions);
  }

  putProduct(body: Product) {
    return this._http.put(this._url, body, httpOptions);
  }
}
