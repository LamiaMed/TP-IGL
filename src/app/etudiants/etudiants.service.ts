import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Injectable()
export class EtudiantService {
  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }
  url = 'http://localhost:3000';
  getChoix() {
    return this
      .http
      .get(`${this.url}/etud/afficher`);
  }

  ajouterChoix(data) {
    this.http.get(`${this.url}/etud/ajouter`, data)
      .subscribe(
        res => {
          console.log(res);
          this.toastr.success('Votre choix a été inséré avec succès.', 'Success');
          this.router.navigateByUrl('/etudiants');
        },
        err => {
          console.log('Error occured:' , err);
          this.toastr.error(err.message, 'Error occured');
        }
      );
  }
}