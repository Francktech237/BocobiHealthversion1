import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {
sidebarStatus: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  clickEvent(){
    
  }
}
