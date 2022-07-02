import { Component, OnInit } from '@angular/core';
import { MedicamentService } from 'src/app/services/medicament.service';
import { MedecinService } from 'src/app/services/medecin.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-bocaccueil',
  templateUrl: './bocaccueil.component.html',
  styleUrls: ['./bocaccueil.component.css']
})
export class BocaccueilComponent implements OnInit {
  medicaments : any;
  medoc:'';
  mede:'';
  pat:'';
  medecins:any;
  patients:any;
  constructor(private medicamentService: MedicamentService,private medecinService:MedecinService
    , private patientService:PatientService) { }

  ngOnInit(): void {
    this.comtemedi()
    this.comtmede()
    this.comtpat()
  }

comtemedi(){
  this.medicamentService.getMedicament().subscribe(data=>{
    this.medicaments = data
    console.log(this.medicaments.length);
    this.medoc  = this.medicaments.length; 
    // this.pat = this.patients.length;
 });  
}
comtmede(){
  this.medecinService.getMedecin().subscribe(data=>{
    this.medecins=data;
    console.log('medecin'+ this.medecins.lenght);
    this.mede  = this.medecins.length; 
  });
}
comtpat(){
 this.patientService.getPatient().subscribe(data=>{
   this.patients=data;
   this.pat = this.patients.length;
 });
}
}
