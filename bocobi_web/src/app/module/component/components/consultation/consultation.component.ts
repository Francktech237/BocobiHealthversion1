import { Component, OnInit, ViewChild } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';
import { Patient } from 'src/app/models/patient.model';
import { Consultation } from 'src/app/models/consultation.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {
  patient: Patient=new Patient();
  consul:Consultation= new Consultation
 patients:any
 datte=new Date();
 @ViewChild('f')form!: NgForm ;
 editMode:boolean = false;
  medicid!: string;
  un!:string;
  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.getPatient().subscribe(data=>{
      this.patients = data;   
      console.log(this.patients)

  });
  this.consul.dateConsult= this.datte
  // this.consul.idPersonne= this.patient.idPersonne
  // console.log(this.consul.idPersonne)
}
editconsul(idPersonne:string){

  this.medicid = idPersonne
 let patient=this. patients.find((p: {  idPersonne: string; }) => {return p.idPersonne ===  idPersonne});
 console.log(this.form);
 this.form.setValue({
   idPersonne:patient.idPersonne,
      
 });
 this.editMode = true;
}
}
