import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
@Output() sidebarToggled = new EventEmitter<boolean>();
menuStatus: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  SidebarToggled(){
    // this.menuStatus = !this.menuStatus;
    // this.SidebarToggled.emit(this.menuStatus);
  }
}
