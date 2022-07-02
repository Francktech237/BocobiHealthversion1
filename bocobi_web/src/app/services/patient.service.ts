import { Injectable } from '@angular/core';
import { Patient } from '../models/patient.model';
import { Subject, from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  // private patients:Patient[] = [
    
  // ];
  // patientSubject =new Subject<Patient[]>();
  constructor(private httpClient: HttpClient) { }
  // emitPatient(){
  //   this.patientSubject.next(this.patients.slice());
  // }

  createPatient(patient: Patient) : Observable<object>{
    console.log(patient);
    return this.httpClient.post("http://localhost:9898/bocobi/patient", patient);
  }
  getPatient() : Observable<object>{
  return this.httpClient.get<object>("http://localhost:9898/bocobi/Patients");
 
  }
  supPatient(idPersonne?: number): Observable<object>{
    return this.httpClient.delete<object>("http://localhost:9898/bocobi/patient/"+idPersonne);
 
  }
  
}
