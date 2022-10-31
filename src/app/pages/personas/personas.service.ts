// --- Dependencies ---
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap, BehaviorSubject } from 'rxjs';

// --- Interfaces ---
import { Person } from './personas.interfaces';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class PersonasService {
  private _url: string = 'http://localhost:3000/personas';
  private _people: BehaviorSubject<Person[] | null> = new BehaviorSubject(
    null
  ) as BehaviorSubject<Person[] | null>;

  get people$(): Observable<Person[]> {
    return this._people.asObservable() as Observable<Person[]>;
  }

  getAllPeople() {
    return this._http
      .get(this._url)
      .pipe(tap((response) => this._people.next(response as any)));
  }

  getPersonById(id: string) {
    return this._http
      .get(`${this._url}/${id}`)
      .pipe(tap((response) => this._people.next(response as Person[])));
  }

  putPerson({
    Apell1_Encargado,
    Apell2_Encargado,
    FechaNacimiento_Encargado,
    Id_Encargado,
    Nom1_Encargado,
    Nom2_Encargado,
    Rol_Encargado,
    Sexo_Encargado,
    Tip_Doc_Encargado,
    num_Doc_Encargado,
  }: Person) {
    console.log({
      Apell1_Encargado,
      Apell2_Encargado,
      FechaNacimiento_Encargado,
      Id_Encargado,
      Nom1_Encargado,
      Nom2_Encargado,
      Rol_Encargado,
      Sexo_Encargado,
      Tip_Doc_Encargado,
      num_Doc_Encargado,
    });

    const body = {
      Apell1_Encargado,
      Apell2_Encargado,
      FechaNacimiento_Encargado,
      Id_Encargado,
      Nom1_Encargado,
      Nom2_Encargado,
      Rol_Encargado,
      Sexo_Encargado,
      Tip_Doc_Encargado,
      num_Doc_Encargado,
    };

    return this._http.put(this._url, body, httpOptions);
  }

  constructor(private _http: HttpClient) {}
}
