import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FormsComponent } from './forms/forms.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';

const routes:Routes=[
  { path:'',component:SidebarComponent},
  {path:'acceuil',component:AcceuilComponent},
  {path:'forms',component:FormsComponent},
  {path: 'etudiants', component: EtudiantsComponent}
];



@NgModule({
  imports: [
   RouterModule.forRoot(routes)
  ], 
  exports:[]
})
export class AppRoutingModule { }
