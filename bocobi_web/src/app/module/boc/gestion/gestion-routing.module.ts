import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionComponent } from '../../component/gestion/gestion.component';
import { MedicamentComponent } from '../../component/components/medicament/medicament.component';
import { BocaccueilComponent } from '../../component/components/bocaccueil/bocaccueil.component';
import { PatientComponent } from '../../component/components/patient/patient.component';
import { MedecinComponent } from '../../component/components/medecin/medecin.component';
import { ProfilemedecinComponent } from '../../component/components/profilemedecin/profilemedecin.component';
import { ExamneComponent } from '../../component/components/examne/examne.component';
import { OrdonnanceComponent } from '../../component/components/ordonnance/ordonnance.component';
import { ConsultationComponent } from '../../component/components/consultation/consultation.component';
import { CaissierComponent } from '../../component/components/caissier/caissier.component';
import { PharmacienComponent } from '../../component/components/pharmacien/pharmacien.component';
import { CompteComponent } from '../../component/components/compte/compte.component';


const routes: Routes = [
  {
    path: '',
    component: GestionComponent, children: [
      {
        component: MedicamentComponent,
       path: 'medicament'
    },
    {
      component: BocaccueilComponent,
     path: ''
    },
    {
      component: PatientComponent,
     path: 'patient'
    },
    {
     path: 'medecin',
     children:[
       {
         path:'',
         component: MedecinComponent,
       },
       {
        component: ProfilemedecinComponent,
       path: ':idPersonne'
      }
      
     ]
    },
     {
      component: ExamneComponent,
     path: 'examen'
    },
  
    {
      component: OrdonnanceComponent,
     path: 'ordonnance'
    },
    {
      component: ConsultationComponent,
     path: 'consultation'
    },
    {
      component: CaissierComponent,
     path: 'caissier'
    },
    {
      component: PharmacienComponent,
     path: 'pharmacien'
    },
    {
      component: CompteComponent,
     path: 'compte'
    },

    ]
   
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionRoutingModule { }
