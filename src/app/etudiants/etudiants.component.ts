
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Service} from './etudiants.Service';
import {info} from './etudiants.interface';


@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.scss']
})
export class EtudiantComponent implements OnInit {
  aaaa: info[];

  constructor(private service:Service, private router: Router) { }

  ngOnInit() {
    this.service
      .afficherInfo()
      .subscribe((data:info[]) => {
        this.aaaa= data;
      });
  }

  goToAddEtudiant () {
    this.router.navigateByUrl('./forms');
  }

}
