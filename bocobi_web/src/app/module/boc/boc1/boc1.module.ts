import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Boc1RoutingModule } from './boc1-routing.module';
// import { Boco1Component } from './module/component/boco1/boco1.component';
// import { HomeComponent } from 'src/app/components/home/home.component';
import { ListDocteurComponent } from 'src/app/components/home/list-docteur/list-docteur.component';
import { Boco1Component } from '../../component/boco1/boco1.component';
import { GestionRoutingModule } from '../gestion/gestion-routing.module';


@NgModule({
  declarations: [
    // Boco1Component,
    // HomeComponent
    // ListDocteurComponent

  ],
  imports: [
    CommonModule,
    Boc1RoutingModule,
    GestionRoutingModule,
    
  ]
})
export class Boc1Module { }
