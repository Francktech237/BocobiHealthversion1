import { Injectable } from '@angular/core';
import { Patient } from '../models/patient.model';
import { Subject, from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Caissier } from '../models/caissier.model';

@Injectable({
  providedIn: 'root'
})
export class CaissierService {
  // private patients:Patient[] = [
    
  // ];
  // patientSubject =new Subject<Patient[]>();
  constructor(private httpClient: HttpClient) { }
  // emitPatient(){
  //   this.patientSubject.next(this.patients.slice());
  // }

  createCaissier(caissier: Caissier) : Observable<object>{
    console.log(caissier);
    return this.httpClient.post("http://localhost:9898/bocobi/Caissier", caissier);
  }
  getPatient() : Observable<object>{
  return this.httpClient.get<object>("http://localhost:9898/bocobi/caissier");
 
  }
  supPatient(idPersonne?: number): Observable<object>{
    return this.httpClient.delete<object>("http://localhost:9898/bocobi/patient/"+idPersonne);
 
  }
  
}
