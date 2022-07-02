import { Component, OnInit } from '@angular/core';
import { Compte } from 'src/app/models/compte.model';
import { NgForm } from '@angular/forms';
import { ComptesService } from 'src/app/services/comptes.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  compte: Compte = new Compte();
  constructor( private compteService: ComptesService) { }

  ngOnInit(): void {
  }
  saveCompte(f:NgForm)
  {
    console.log( this.compte);
    this.compteService.createCompte(this.compte).subscribe(data=>{
      alert("enregistrer avec success")
    },error=>alert("desoler enregistrement echoué")
    );
    f.reset();
    // window.location.reload();
  }
}
