import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Injectable()
export class Service {
    constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }
    url = 'http://localhost:3000';
    afficherInfo() {
    return this
        .http
        .get(`${this.url}`);
  }

    ajouterChoix(data) {
    this.http.put(`${this.url}`, data)
        .subscribe(
        res => {
          console.log(res);
          this.toastr.success('Votre choix a été ajouter avec succès.', 'Success');
          this.router.navigateByUrl('/etudiant');
        },
        err => {
          console.log('Error occured:' , err);
          this.toastr.error(err.message, 'Error occured');
        }
      );
  }
}
