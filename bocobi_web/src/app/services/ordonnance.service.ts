import { Injectable } from '@angular/core';
import { Patient } from '../models/patient.model';
import { Subject, from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Ordonnance } from '../models/ordonnance.model';

@Injectable({
  providedIn: 'root'
})
export class OrdonnanceService {
  // private patients:Patient[] = [
    
  // ];
  // patientSubject =new Subject<Patient[]>();
  constructor(private httpClient: HttpClient) { }
  // emitPatient(){
  //   this.patientSubject.next(this.patients.slice());
  // }

  createOdonnance(ordonnance: Ordonnance) : Observable<object>{
    console.log(ordonnance);
    return this.httpClient.post("http://localhost:9898/bocobi/patient", ordonnance);
  }
  getPatient() : Observable<object>{
  return this.httpClient.get<object>("http://localhost:9898/bocobi/Patients");
 
  }
  supPatient(idPersonne?: number): Observable<object>{
    return this.httpClient.delete<object>("http://localhost:9898/bocobi/patient/"+idPersonne);
 
  }
  
}
