import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Examen } from '../models/examen.model';
@Injectable({
  providedIn: 'root'
})
export class ExamenService {
 
  constructor(private http:HttpClient) { }
  getExam(): Observable<object>{
   return this.http.get("http://localhost:9898/bocobi/examens");
  }
  createExam(examen: Examen) : Observable<Object>{
    console.log(examen);
    return this.http.post("http://localhost:9898/bocobi/examen",examen);
  }
 
  Profilvoir(idExamen: number): Observable<Object>{
    
      return this.http.get<Object>("http://localhost:9898/bocobi/examen/"+idExamen)
      .pipe(
        map((examen: Examen) =>examen)
      )
   
    
  }
  
}