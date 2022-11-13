// --- Dependencies ---
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, BehaviorSubject } from 'rxjs';

// --- Interfaces ---
import { Report } from './informes.interfaces';

@Injectable({
  providedIn: 'root',
})
export class InformesService {
  private _url: string = 'http://localhost:3000/informes';

  constructor(private __http: HttpClient) {}

  getReportByPerson(
    startDate: string | Date,
    finishDate: string | Date,
    id: string
  ) {
    return this.__http.get<Report[] | []>(
      `${this._url}/personas/${startDate}/${finishDate}/${id}`
    );
  }

  getReportByProduct(
    startDate: string | Date,
    finishDate: string | Date,
    id: string
  ) {
    return this.__http.get<Report[] | []>(
      `${this._url}/productos/${startDate}/${finishDate}/${id}`
    );
  }
}
