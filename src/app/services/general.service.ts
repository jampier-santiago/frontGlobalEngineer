// --- Dependencies ---
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

type Item = {
  name: string;
  code: string;
};

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  getCatalogType(type: string) {
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' }),
      params: new HttpParams().append('type', type),
    };

    return this._http
      .get(`http://localhost:3000/catalogo/tipos/data`, httpOptions)
      .pipe(
        map<Object, Item[]>((result) => {
          const dataResult = [...(result as any)];
          const temporaryData: Item[] = [];

          dataResult.forEach((item) => {
            temporaryData.push({
              name: item.Nombre_Catalogo,
              code: item.Id_Catalogo,
            });
          });

          return temporaryData;
        })
      );
  }

  constructor(private _http: HttpClient) {}
}
