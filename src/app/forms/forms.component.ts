import { Component, OnInit } from '@angular/core';
import{NgForm, FormControl} from "@angular/forms";
import {FormBuilder, FormGroup} from "@angular/forms";
import { EtudiantsComponent } from '../etudiants/etudiants.component';
import {EtudiantService} from "../etudiants/etudiants.service";
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit
 {
  myForm:FormGroup;
  formBuilder : FormBuilder;
  etudiantservice:EtudiantService;
constructor(){}
 
    ngOnInit(){
      this.myForm = new FormGroup({
        Matricul:new FormControl(),
        Nom : new FormControl(),
        Prenom :new FormControl() ,
        Email: new FormControl(),
        Choix1 : new FormControl(),
        Choix2 : new FormControl(),
        Choix3 : new FormControl()
      })
      console.log(`***${this.myForm.value}` )
    }
    onFormSubmit(){
      this.etudiantservice.ajouterChoix(this.myForm);
    };
 
}
