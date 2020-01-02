import { Component, OnInit } from '@angular/core';
import {EtudiantService} from './etudiants.service';
import {Etudiant} from './etudiants.class';
import {Router} from "@angular/router";

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.scss']
})
export class EtudiantsComponent implements OnInit {
  etudiants:Etudiant[];
/**
 * 
 * @param etudiantService 
 * @param router 
 */
  constructor(private etudiantService: EtudiantService, private router: Router){} 
/**
 * Une methode de angular pour initialiser les attributs de etudiant.
 */
  ngOnInit() {
  this.etudiantService
      .getChoix()
      .subscribe((data: Etudiant[]) => {
        this.etudiants = data;
        console.log('liste',this.etudiants);
      });
  }
/**
 * Une methode qui nous permet de rediriger l'utilisateur vers forms.
 */
  goToAddMatiere () {
    this.router.navigateByUrl('/forms');
  }

}
