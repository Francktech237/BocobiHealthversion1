// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class MedecinService {

//   constructor() { }
  
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medecin } from '../models/medecin.model';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MedecinService {
  findOne(idMedecin: number): any {
    throw new Error("Method not implemented.");
  }

  constructor(private http:HttpClient) { }
  getMedecin(): Observable<object>{
   return this.http.get("http://localhost:9898/bocobi/Medecins");
  }
  createMedecin(medecin: Medecin) : Observable<Object>{
    console.log(medecin);
    return this.http.post("http://localhost:9898/bocobi/medecin",medecin);
  }

 
  // delete(id): Observable<object> {
  //   return this.http.delete(`${baseUrl}/${id}`);
  // }

  // update(id, data): Observable<any> {
  //   return this.http.put(`${baseUrl}/${id}`, data);
  // }
  Profilvoir(idMedecin: number): Observable<Object>{
    
      return this.http.get<Object>("http://localhost:9898/bocobi/Medecin/"+idMedecin)
      .pipe(
        map((medecin:Medecin) => medecin)
      )
   
  }
  
  modifier(idPersonne:string, value:Medecin){
    return this.http.put<Object>("http://192.168.43.53:9898/bocobi/updatemedecin/"+idPersonne,value);  
  }
}

