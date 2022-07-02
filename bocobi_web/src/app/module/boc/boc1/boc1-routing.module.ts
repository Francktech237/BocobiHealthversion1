import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Boco1Component } from '../../component/boco1/boco1.component';
// import { HomeComponent } from 'src/app/components/home/home.component';
import { ListDocteurComponent } from 'src/app/components/home/list-docteur/list-docteur.component';
import { AuthGuard } from 'src/app/services/app.guard';
import { LoginComponent } from 'src/app/components/auth/login/login.component';
import { RegisterComponent } from 'src/app/components/auth/register/register.component';
import { HomeMainAboutComponent } from 'src/app/components/home/home-main-about/home-main-about.component';
import { ParametreComponent } from 'src/app/components/home/parametre/parametre.component';
import { HomeOrdonanceComponent } from 'src/app/components/home/home-ordonance/home-ordonance.component';
import { VideoCallComponent } from 'src/app/components/home/video-call/video-call.component';
import { ChatComponent } from 'src/app/components/home/chat/chat.component';
import { ListCompteComponent } from 'src/app/components/compte/list-compte/list-compte.component';
import { HomeuserComponent } from 'src/app/components/homeuser/homeuser.component';
import { HomeAdminComponent } from 'src/app/components/home-admin/home-admin.component';
import { HomemedecinComponent } from 'src/app/components/homemedecin/homemedecin.component';
import { HomeMainServiceComponent } from 'src/app/components/home/home-main-service/home-main-service.component';
import { HomeMainAppointmentComponent } from 'src/app/components/home/home-main-appointment/home-main-appointment.component';
import { HomeMainAbonnementComponent } from 'src/app/components/home/home-main-abonnement/home-main-abonnement.component';
import { ListAbonnementComponent } from 'src/app/components/home/home-main-abonnement/list-abonnement/list-abonnement.component';
import { HomeMainContactComponent } from 'src/app/components/home/home-main-contact/home-main-contact.component';
import { HomeMainDepartmentsComponent } from 'src/app/components/home/home-main-departments/home-main-departments.component';
import { HomeMainDoctorsComponent } from 'src/app/components/home/home-main-doctors/home-main-doctors.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { NotFoundComponent } from 'src/app/components/not-found/not-found.component';
// import { GestionComponent } from '../../component/gestion/gestion.component';
// import { AuthGuard } from 'src/app/services/app.guard';


const routes: Routes = [
 

    {
      path: '',
      component: Boco1Component, children: [
        // {
        //   path:'homes',
        //   component: HomeComponent,
        //   pathMatch: 'full'
        // },
        {
          component: ListDocteurComponent,
         canActivate: [AuthGuard],
          path: 'listDocteur'
        },
       {
          component: HomeMainAboutComponent,
           path: 'about'
      },
      {
           component: ParametreComponent,
        canActivate: [AuthGuard],
          path: 'mesParametre'
         },
         {
             component: HomeOrdonanceComponent,
             //canActivate: [AuthGuard],
             path: 'ordonance'
           },
           {
               component: VideoCallComponent,
              canActivate: [AuthGuard],
               path: 'teleconsultation'
          },
             {
                 component: ChatComponent,
                 canActivate: [AuthGuard],
                 path: 'chat'
             },
             {
                component: ListCompteComponent,
               path: 'listCompte'
            },
               {
                  component: HomeuserComponent,
                   data: { roles: ['role_patient'] },
                   path: 'homeUser'
              },
                 {
                    component: HomeAdminComponent,
                     data: { roles: ['role_admin'] },
                     path: 'homeAmin'
                 },
                 {
                     component: HomemedecinComponent,
                    data: { roles: ['role_medecin'] },
                     path: 'homeMedecin'
                   },
                   {
                       component: HomeMainServiceComponent,
                      path: 'service'
                     },
                  {
                    component: HomeMainAppointmentComponent,
                      canActivate: [AuthGuard],
                       path: 'rendez-vous'
                     },
                     {
                  component: HomeMainAbonnementComponent,
                     canActivate: [AuthGuard],
                     path: 'PrendreAbonnement'
                   },
                   {
                       component: ListDocteurComponent,
                       canActivate: [AuthGuard],
                      path: 'listDocteur'
                    },
                    {
                       component: ListAbonnementComponent,
                       path: 'listAbonnement'
                     },
                     {
                        component: HomeMainContactComponent,
                       path: 'contact'
                   },
                   {
                   component: HomeMainDepartmentsComponent,
                     path: 'departement'
                },
                {
                    component: HomeMainDoctorsComponent,
                     path: 'doctor'
               },
               {
                  component: HomeComponent,
                  path: ''
               },
               {
                   path:'',
                   component: HomeComponent,
                  pathMatch: 'full'
                 }
      
      ]
      
  
    },
    
   
    //  {
    //   path: '/gestion',
    //   loadChildren: () =>
    //   import('../gestion/gestion.module').then((m) => m.GestionModule)
    // }

  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Boc1RoutingModule { }
