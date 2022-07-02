import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Examen } from '../models/examen.model';
import { Compte } from '../models/compte.model';
@Injectable({
  providedIn: 'root'
})
export class ComptesService {
 
  constructor(private http:HttpClient) { }
  createCompte(compte: Compte) : Observable<Object>{
    console.log(compte);
    return this.http.post("http://localhost:9898/bocobi/compte",compte);
  }
}