import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MedicamentService } from 'src/app/services/medicament.service';
import { Medicament } from 'src/app/models/medicament.model';
// import {MatDialog, MatDialogRef} from '@angular/Dialog';

@Component({
  selector: 'app-medicament',
  templateUrl: './medicament.component.html',
  styleUrls: ['./medicament.component.css']
})
export class MedicamentComponent implements OnInit {
  medicament:Medicament = new Medicament();
  medicaments :any;
  datte=new Date();
  @ViewChild('f')form!: NgForm ;
  medicid!: string;
  editMode:boolean = false;
  constructor(private medicamentService: MedicamentService) { }

  ngOnInit(): void {
    this.medicamentService.getMedicament().subscribe(data=>{
      this.medicaments = data;   
   }); 
   this.medicament.dateFabrication= this.datte
   
  }
  saveMedicament(f:NgForm)
  {
    console.log( this.medicament);
    this.medicamentService.createMedicament(this.medicament).subscribe(data=>{
      alert("enregistrer avec success")
    },error=>alert("desoler enregistrement echoué")
    );
    f.reset();
    window.location.reload();
  }
  deletemedic(idMedicament?:number){
 
    this.medicamentService.supMedicament(idMedicament).subscribe(
     data=>{
       alert("enregistrer avec success")
     },error=>alert("desoler Suppression echoué")
    );
    window.location.reload();
 
 console.log("delete", idMedicament)
 }
 editmedic(idMedicament:string){
   this.medicid = idMedicament
  let medicament=this.medicaments.find((p: { idMedicament: string; }) => {return p.idMedicament === idMedicament});
  console.log(this.form);
  this.form.setValue({
   descriptionMedicament:medicament.descriptionMedicament,
   libelleMedicament:medicament.libelleMedicament,
  quantiteMedicament:medicament.quantiteMedicament,
  dateFabrication:medicament.dateFabrication,
   datePeremption:medicament.datePeremption,
    prixMedicament:medicament.prixMedicament
        
  });
  this.editMode = true;
 }
 onupdate(){
 
  this.medicamentService.modifier(this.medicid,this.medicament).subscribe(data=>{
   alert("enregistrer avec success")
 },error=>alert("desoler enregistrement echoué")
 );
 window.location.reload();
 console.log(this.medicament)
 } 
}
