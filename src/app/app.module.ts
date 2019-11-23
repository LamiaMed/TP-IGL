import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule
} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {EtudiantComponent} from './etudiants/etudiants.component';
import {Admin} from "./etudiants/etudiant.Service";
import {Etudiant} from "./etudiants/etudiant.Service";
import {ToastrModule} from "ngx-toastr";

const appRoutes: Routes = [
  {path: 'etudiant', component: EtudiantComponent},];

@NgModule({
  declarations: [
    AppComponent,
    
    FormsComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot()
    
  ],
  providers: [
    Etudiant,Admin
  ],
  bootstrap: [AppComponent],
  
 
})
export class AppModule { 

}
