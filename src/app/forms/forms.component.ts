import { Component, OnInit } from '@angular/core';
import{NgForm, FormControl} from "@angular/forms";
import {FormBuilder, FormGroup} from "@angular/forms";
import {EtudiantService} from "../etudiants/etudiants.service";/*
import {Etudiant} from "../etudiants/etudiants.interface";*/
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
     this. myForm = new FormGroup({
        Nom : new FormControl(),
        Prenom :new FormControl() ,
        Email: new FormControl(),
        Choix1 : new FormControl(),
        Choix2 : new FormControl(),
        Choix3 : new FormControl()
      })
    }
    onFormSubmit(){}
    ajouterChoix( ) {
      this.etudiantservice.ajouterChoix(this.myForm);
    }

 
}
