import { Component, OnInit, ViewChild } from '@angular/core';
import { Patient } from 'src/app/models/patient.model';
import { NgForm } from '@angular/forms';
import { Ordonnance } from 'src/app/models/ordonnance.model';
import { OrdonnanceService } from 'src/app/services/ordonnance.service';
import { PatientService } from 'src/app/services/patient.service';


@Component({
  selector: 'app-ordonnance',
  templateUrl: './ordonnance.component.html',
  styleUrls: ['./ordonnance.component.css']
})
export class OrdonnanceComponent implements OnInit {
  ordo:Ordonnance= new Ordonnance
 patients:any
 datte=new Date();
 @ViewChild('f')form!: NgForm ;
 editMode:boolean = false;
  medicid!: string;
  un!:string;
  constructor( private ordonnanceService: OrdonnanceService, private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.getPatient().subscribe(data=>{
      this.patients = data;   
      console.log(this.patients)

  });
  
  }

}
