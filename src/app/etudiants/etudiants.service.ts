import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable()
export class EtudiantService {

  private url = 'http://localhost:4200';
  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }
 
  //*****************pour gérer les erreurs************* */
  private static handleError(error: HttpErrorResponse) {
    let e: string;
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      e = 'Une erreur s\'est produite, réessayer ulterieurement';
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}`);
      if (error.status === 401) {
        e = 'Vous n\'ètes pas autorisé a effectuer cette action';
      } else if (error.status === 409) {
        e = 'Ce modele existe déja';
      } else if (error.status === 404) {
        e = 'Votre marque n\'existe plus';
      } else {
        e = 'Une erreur s\'est produite, réessayer ulterieurement';
      }
    }
    return throwError(e);
  }
  
  getChoix() {
    return this
      .http
      .get(`${this.url}/etud/afficher`);
  }

 ajouterChoix(data) {
    this.http.put(`${this.url}/etud/ajouter`, data)
      .subscribe(
        (res) => {
          console.log(res);
         return this.toastr.success('Votre choix a été inséré avec succès.', 'Success');
         // this.router.navigateByUrl('/etudiants');
        },
        (err) => {
          console.log('Error occured:' , err);
          return this.toastr.error(err.message, 'Error occured');
        }
      );
  }
  
}