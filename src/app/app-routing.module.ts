import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsComponent } from './forms/forms.component';
import { ChoicesComponent } from './choices/choices.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';

const routes:Routes=[
 { path:'',component:SidebarComponent},
    {path:'forms',component:FormsComponent},
  {path:'choices',component:ChoicesComponent},
  {path: 'etudiants', component: EtudiantsComponent}
];



@NgModule({
  imports: [
   RouterModule.forRoot(routes)
  ], 
  exports:[]
})
export class AppRoutingModule { }
