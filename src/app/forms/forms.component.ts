import { Component, OnInit } from '@angular/core';
import{NgForm, FormControl} from "@angular/forms";
import {FormBuilder, FormGroup} from "@angular/forms";
import { EtudiantsComponent } from '../etudiants/etudiants.component';
import {EtudiantService} from "../etudiants/etudiants.service";
import {Etudiant} from "../etudiants/etudiants.interface";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit
 {
   etudiant={
    Mtricule:'',
    Nom: '',
    Prenom: '',
    AdressEmail: '',
    Choix1: '',
    Choix2: '',
    Choix3: ''
   }
   constructor(private etudiantservice:EtudiantService){}
   ngOnInit(){};
   ajouterChoix( data:any) {
    this.etudiantservice.ajouterChoix(data);
  }
}

 /* myForm:FormGroup;
  formBuilder : FormBuilder;
  etudiantservice:EtudiantService;
constructor(){}
 
    ngOnInit(){
      this.myForm = new FormGroup({
        Matricul: new FormControl(),
        Nom : new FormControl(),
        Prenom :new FormControl() ,
        Email: new FormControl(),
        Choix1 : new FormControl(),
        Choix2 : new FormControl(),
        Choix3 : new FormControl()
      })
      console.log(`***${this.myForm.value}` )
    }
    onFormSubmit(){}
    ajouterChoix( ) {
      this.etudiantservice.ajouterChoix(this.myForm);
    }
 
}*/
