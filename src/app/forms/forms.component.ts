import { Component, OnInit } from '@angular/core';
import{NgForm, FormControl, Validators} from "@angular/forms";
import {FormBuilder, FormGroup} from "@angular/forms";
import { EtudiantsComponent } from '../etudiants/etudiants.component';
import {EtudiantService} from "../etudiants/etudiants.service";
import {Etudiant} from "../etudiants/etudiants.class";
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})

export class FormsComponent implements OnInit
 {
  myForm:FormGroup;
  constructor(private etudiantservice:EtudiantService,private formBuilder: FormBuilder, private router: Router) { }
  ngOnInit(){
    this.myForm = this.formBuilder.group({
      Matricule:['',Validators.required],
      Nom: ['',Validators.required],
      Prenom: ['',Validators.required],
      Email: ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]+$')])],
      Choix1: ['',Validators.required],
      Choix2: ['',Validators.required],
      Choix3: ['',Validators.required],
    });
  }
  onSubmitForm() {
    const formValue = this.myForm.value;
    const infoEtud = new Etudiant()
    infoEtud['Matricule']=formValue['Matricule'];
    infoEtud['Nom']=formValue['Nom'];
    infoEtud['Prenom']=formValue['Prenom'];
    infoEtud['Moyenne']=formValue['Email'];
    infoEtud['Choix1']=formValue['Choix1'];
    infoEtud['Choix2']=formValue['Choix2'];
    infoEtud['Choix3']=formValue['Choix3'];
    this.etudiantservice.ajouterChoix(infoEtud);
    this.router.navigate(['/etudiants']);
  }
 }