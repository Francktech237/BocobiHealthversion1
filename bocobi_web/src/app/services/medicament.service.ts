import { Injectable } from '@angular/core';
import { Medicament } from '../models/medicament.model';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MedicamentService {
  [x: string]: any;
  push(arg0: {}): any {
    throw new Error("Method not implemented.");
  }

    // private medicaments:Medicament[] = [
    //   // {
    //   //     idMedicament: '1',
    //   //     descriptionMedicament: 'para',
    //   //     libelleMedicament: 'para',
    //   //     quantiteMedicament: 'quantite',
    //   //     prixMedicament: 'prix',
    //   //     dateFabrication: '1999/6/12',
    //   //     datePeremption: '12/5/2000'
    //   //   } ,
    // ];
    medicamentSubject = new Subject<Medicament[]>();
  constructor(private httpClient: HttpClient) { }
  
  // emitmedicament(){
  //   this.medicamentSubject.next(this.medicaments.slice());
  // }
  getMedicament() : Observable<object>{
    return this.httpClient.get("http://localhost:9898/bocobi/Medicaments");
    // http://192.168.43.239:9898/bocobi/Medicaments
  }
  createMedicament(medicament: Medicament) : Observable<Object>{
    console.log(medicament);
    return this.httpClient.post("http://localhost:9898/bocobi/medicament", medicament);
  
     }
//   addMedicament(medicament: Medicament){
// this.medicaments.push(medicament);
// this.emitmedicament();
//   }
 supMedicament(idMedicament?: number): Observable<Object>{
   return this.httpClient.delete<Object>("http://localhost:9898/bocobi/medicament/"+idMedicament);

 }
//  updatemedicament(idMedicament?: number, medicament:Medicament){
//   return this.httpClient.delete<Object>("http://localhost:9898/bocobi/medicament/"+idMedicament,medicament);

//  }
 modifier(idMedicament:string, value:Medicament){
  return this.httpClient.put<Object>("http://localhost:9898/bocobi/updateMedicament/"+idMedicament,value);
 
 }
}
