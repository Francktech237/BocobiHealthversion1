import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Caissier } from 'src/app/models/caissier.model';
import { CaissierService } from 'src/app/services/caissier.service';

@Component({
  selector: 'app-caissier',
  templateUrl: './caissier.component.html',
  styleUrls: ['./caissier.component.css']
})
export class CaissierComponent implements OnInit {
  caissier: Caissier = new Caissier();
  url: any;
  caissiers:any
  constructor(private caissierService:CaissierService) { }

  ngOnInit(): void {
    this.caissierService.getPatient().subscribe(data=>{
      this.caissiers = data;   
      console.log(this.caissiers)
    });
  }
  onSubmitForm(f:NgForm){
    console.log( this.caissier);
    this.caissierService.createCaissier(this.caissier).subscribe(data=>{
      alert("enregistrer avec success")
    },error=>alert("desoler enregistrement echoué")
    );
    f.reset();
    // window.location.reload();
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
}
