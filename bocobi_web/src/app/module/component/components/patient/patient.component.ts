import { Component, OnInit, ViewChild } from '@angular/core';
import { Patient } from 'src/app/models/patient.model';
import { PatientService } from 'src/app/services/patient.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patient: Patient=new Patient();
 patients:any
 patientts:Patient[] = [];
 datte=new Date();
 @ViewChild('f')form!: NgForm ;
 medicid!: string;
 editMode:boolean = false;
// url='..\assets\img\dil.PNG'
url='..\assets\img\dil.PNG'; 
datt=new Date
sexe= 'Masculin';
  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.getPatient().subscribe(data=>{
      this.patients = data;   
      console.log(this.patients)
    });
    this.patient.dateEnregistrement= this.datt
    this.patient.Sexe = this.sexe
    
  }
  onFileSelected(event:any){
    if (event.target.files[0])
    {
      let reader= new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event:any) =>(
          this.url = event.target.result
      );
    }
  }
  onSubmitForm(f:NgForm){
    console.log(this.patient);

  this.patientService.createPatient(this.patient).subscribe(data=>{
    alert("enregistrer avec success")
  },error=>alert("desoler enregistrement echoué")
  );
      f.reset()
      // window.location.reload();
  }
  deletepa(idPersonne?:number){
    this.patientService.supPatient(idPersonne).subscribe(
      data=>{
        alert("enregistrer avec success")
      },error=>alert("desoler Suppression echoué")
     );
    //  window.location.reload();
  
  console.log("delete", idPersonne)
  }
  uppatient(idPersonne:string){
   
      this.medicid = idPersonne
     let patient=this.patients.find((p: { idPersonne: string; }) => {return p.idPersonne === idPersonne});
     console.log(this.patient);
 
   
    //  this.form.setValue({
    //   name:patient.name,
    //   username:patient.username,
    //   numTel:patient.numTel,
    //   usernamet:patient.username,
    //   email:patient.email,
    //   dateNaissance:patient.dateNaissance,
    //   Sexe:patient.Sexe,
    //   nationalite:patient.nationalite,
    //   lieuResidence:patient.lieuResidence,
    //   age:patient.lieuResidence,
    //   statutMatrimonial:patient.lieuResidence,
    //   dateEnregistrement:patient.lieuResidence,
    //   photoProfil:patient.lieuResidence,
           
    //  });
    //  this.editMode = true;
 
  }
}
