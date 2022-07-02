import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Medecin } from 'src/app/models/medecin.model';
import { ActivatedRoute } from '@angular/router';
import { MedecinService } from 'src/app/services/medecin.service';
import { map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profilemedecin',
  templateUrl: './profilemedecin.component.html',
  styleUrls: ['./profilemedecin.component.css']
})
export class ProfilemedecinComponent implements OnInit, OnDestroy {
 idMedecin: number = null;
 private sub:Subscription
 medecin: Medecin = null;
 medicid!: string;
 medecins:string;
 @ViewChild('f')form!: NgForm ;
 editMode:boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute, private medecinService:MedecinService
  ) { }

  ngOnInit(): void {
     this.sub = this.activatedRoute.params.subscribe(params => {
       this.idMedecin = parseInt(params['idPersonne']);
       this.medecinService.Profilvoir(this.idMedecin).pipe(
         map((medecin:Medecin) => this.medecin =medecin)
       ).subscribe()
       console.log(this.medecin);
     });
  }
ngOnDestroy() {
  this.sub.unsubscribe();
}
modimedecin(idPersonne : string){
  // this.medicid = idPersonne
  // let medecin=this.medecins.find((p: { idPersonne: string; }) => {return p.idPersonne === idPersonne});
  // console.log(this.form);
  // this.form.setValue({
  //   name:medecin.name,
  //   username:medecin.username,
  //   Sexe:medecin.Sexe,
  //   email:medecin.email,
  //   dateEnregistrement:medecin.dateEnregistrement,
  //   GradeEmploye:medecin.GradeEmploye,
  //   specialiteMedecin:medecin.specialiteMedecin,
  //   matricule:medecin.matricule,
  //   nationalite:medecin.nationalite,
  //   numTel:medecin. numTel,
  //   serviceMedecin:medecin.serviceMedecin,
   

   
  // });
  this.editMode = true;
 }
 
onupdate(){

 this.medecinService.modifier(this.medicid,this.medecin).subscribe(data=>{
  alert("enregistrer avec success")
},error=>alert("desoler enregistrement echoué")
);
window.location.reload();
console.log(this.medecin)
} 
}
