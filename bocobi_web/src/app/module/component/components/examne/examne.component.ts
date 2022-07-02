import { Component, OnInit } from '@angular/core';
import { Examen } from 'src/app/models/examen.model';
import { NgForm } from '@angular/forms';
import { ExamenService } from 'src/app/services/examen.service';

@Component({
  selector: 'app-examne',
  templateUrl: './examne.component.html',
  styleUrls: ['./examne.component.css']
})
export class ExamneComponent implements OnInit {
  exam: Examen = new Examen();
  examens:any
  constructor( private examService:ExamenService) { }

  ngOnInit(): void {
    this.examService.getExam().subscribe(data=>{
      this.examens=data;
      console.log(this.examens.value);
    });
  }
  saveExam(f:NgForm)
  {
    console.log( this.exam);
    this. examService.createExam(this.exam).subscribe(data=>{
      alert("enregistrer avec success")
    },error=>alert("desoler enregistrement echoué")
    );
    f.reset();
    window.location.reload();
  }
}
