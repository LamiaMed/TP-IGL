import { Component, OnInit } from '@angular/core';
import {EtudiantService} from './etudiants.service';
import {Etudiant} from './etudiants.interface';
import {Router} from "@angular/router";

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.scss']
})
export class EtudiantsComponent implements OnInit {
  etudiants:Etudiant[];

  constructor(private etudiantService: EtudiantService, private router: Router){} 

  ngOnInit() {
  this.etudiantService
      .getChoix()
      .subscribe((data: Etudiant[]) => {
        this.etudiants = data;
        console.log('liste',this.etudiants);
      });
  }

  goToAddMatiere () {
    this.router.navigateByUrl('/forms');
  }

}
