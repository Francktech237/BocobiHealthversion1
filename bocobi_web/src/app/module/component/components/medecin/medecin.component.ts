import { Component, OnInit } from '@angular/core';
import { MedicamentService } from 'src/app/services/medicament.service';
import { Medicament } from 'src/app/models/medicament.model';
import { NgForm } from '@angular/forms';
import { MedecinService } from 'src/app/services/medecin.service';
import { Medecin } from 'src/app/models/medecin.model';
// import { type } from 'os';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.css']
})
export class MedecinComponent implements OnInit {
url:''
medecin: Medecin = new Medecin();
medecins : any;
datte= new Date;
sexe= 'Masculin';
spe= 'Pediatre';
grade='premier';
  constructor(private medecinService:MedecinService, private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.medecinService.getMedecin().subscribe(data=>{
      this.medecins=data;
      console.log(this.medecins.value);
    });
    this.medecin.dateEnregistrement = this.datte
    this.medecin.Sexe = this.sexe
    this.medecin.specialiteMedecin = this.spe
    this.medecin.GradeEmploye = this.grade
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
  saveMedecin(f:NgForm)
  {
    console.log( this.medecin);
    this. medecinService.createMedecin(this.medecin).subscribe(data=>{
      alert("enregistrer avec success")
    },error=>alert("desoler enregistrement echoué")
    );
    f.reset();
    // window.location.reload();
  }

 
  profile(idPersonne){
       this.router.navigate(['./' +idPersonne], {relativeTo: this.activatedRoute})
  }
}
