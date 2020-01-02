import { Component, OnInit } from '@angular/core';
import{NgForm, FormControl, Validators} from "@angular/forms";
import {FormBuilder, FormGroup} from "@angular/forms";
import { EtudiantsComponent } from '../etudiants/etudiants.component';
import {EtudiantService} from "../etudiants/etudiants.service";
import {Etudiant} from "../etudiants/etudiants.class";
import {Email} from "../etudiants/etudiants.class2";
import { Router } from '@angular/router';
import { invalid } from '@angular/compiler/src/render3/view/util';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})

  

export class FormsComponent implements OnInit
 {
  myForm:FormGroup;
  code:Number;
  /**
   * 
   * @param etudiantservice 
   * @param formBuilder 
   * @param router 
   */
  constructor(private etudiantservice:EtudiantService,private formBuilder: FormBuilder, private router: Router) { }
 /**
  * Une fonction de angular pour initialiser les inputs du from.
  */
  ngOnInit(){
    this.myForm = this.formBuilder.group({
      Matricul:['',Validators.required],
      Nom: ['',Validators.required],
      Prenom: ['',Validators.required],
      Email: ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]+$')])],
      Choix1: ['',Validators.required],
      Choix2: ['',Validators.required],
      Choix3: ['',Validators.required],
      Code:['',Validators.required],
    });
  }
  /**
   * Une methode pour envoyer un code à l'utilisateur contenant un code de confirmation unique.
   */
  confirmer(){
    alert("Un email vous sera envoyé, veuillez inserer le code que vous allez reçu !");
    const email=new Email();
    email['destination']= this.myForm.value['Email'];
    email['subject']="Email de confitmation de choix de spécialité 2CS";
    this.code=Math.floor(Math.random() * (9000-1000 + 1)) + 1000;
    email['message']="Votre code de confirmation :"+this.code;
    this.etudiantservice.envoyerEmail(email);
  }
  /**
   * Une methode pour créer un objet étudiant et 
   * initialiser ses attributs avec les données introduites dans le formulaire
   */
  onSubmitForm() {
    const formValue = this.myForm.value;
    const infoEtud = new Etudiant();
    var code1=formValue['Code'];
    infoEtud['Matricul']=formValue['Matricul'];
    infoEtud['Nom']=formValue['Nom'];
    infoEtud['Prenom']=formValue['Prenom'];
    infoEtud['Choix1']=formValue['Choix1'];
    infoEtud['Choix2']=formValue['Choix2'];
    infoEtud['Choix3']=formValue['Choix3'];
    const mail=new Email();
    mail['destination']=formValue['Email'];
    mail['subject']="Choix de spécialité"
    mail['message']="Vos choix ont été bien transmis"
    
    if(this.code==code1)
    {
      this.etudiantservice.ajouterChoix(infoEtud,mail);
    }else{
      alert("Le code que vous avez inseré est incorrect !");
    } 
  }
}
