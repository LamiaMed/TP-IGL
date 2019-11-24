import { Component, OnInit } from '@angular/core';
import {Service} from '../etudiants/etudiants.Service';
import {info} from "../etudiants/etudiants.interface";
 @Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {

  etudiant: info = {
      mtricule: '',
      nom: '',
      prenom: '',
      adresse_email:'',
      choix1:'',
      choix2:'',
      choix3:''
  }

  constructor(private service: Service) { }

  ngOnInit() {
  }

  ajouterChoix(data: info) {
    this.service.ajouterChoix(data);
  }

}



  
  


