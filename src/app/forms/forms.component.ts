import { Component, OnInit } from '@angular/core';
import{NgForm, FormControl} from "@angular/forms";
import {FormBuilder, FormGroup} from "@angular/forms";
import { EtudiantsComponent } from '../etudiants/etudiants.component';
import {EtudiantService} from "../etudiants/etudiants.service";
import {Formulaire} from "../etudiants/etudiants.class2";
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
/*export class FormsComponent implements OnInit
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
}*/

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
export class FormsComponent implements OnInit
 {
  myForm:FormGroup;
  constructor(private etudiantservice:EtudiantService,private formBuilder: FormBuilder, private router: Router) { }
  ngOnInit(){
    this.myForm = this.formBuilder.group({
      Mtricule:'',
      Nom: '',
      Prenom: '',
      Email: '',
      Choix1: '',
      Choix2: '',
      Choix3: ''
    });
  }
  onSubmitForm() {
    const formValue = this.myForm.value;
    const newEtudiant = new Formulaire()
    newEtudiant.constuctor(formValue['Mtricul'], formValue['Nom'],formValue['Prenom'], formValue['Email'],formValue['Choix1'],formValue['Choix2'],formValue['Choix3']);

    this.etudiantservice.ajouterChoix(newEtudiant);
    this.router.navigate(['/etudiants']);
  }
 }