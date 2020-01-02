import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable()
export class EtudiantService {

  private url = 'http://localhost:3000';
  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }
 
 /**
  * C'est une methode qui envoie la requete http 
  * à la route"/afficher"" (backend) qui récupére le contenu de la table étudiant de la bdd.
  * @returns un tableau de Etudiant.
  */
  getChoix() {
    return this
      .http
      .get(`${this.url}/etud/afficher`);
  }
/**
 * Une methode qui envoie la requete http à la route "/ajouter" (backend) qui mis à jour les choix de l'étudiant.
 * @param data de type Formulaire
 * @param mail de type Email
 */
 ajouterChoix(data,mail) {
    this.http.put(`${this.url}/etud/ajouter`, data)
      .subscribe(
        (res) => {
          console.log(res);
          this.toastr.success('Votre choix a été inséré avec succès.');
          this.envoyerEmail(mail);
        },
        (err) => {
          console.log('Error occured:' , err);
          this.toastr.error(err.message, 'Error occured,soyez sure de votre Matricul!');
        }
      );
  }
  /**
   * Une méthode qui envoie une requete http à la
   * route envoyer email dans le backend.
   * @param data de type Formulaire
   */
  envoyerEmail(data){
    this.http.post(`${this.url}/etud/email`, data)
      .subscribe(
        (res) => {
          console.log(res);
          this.toastr.success('un email de confirmation est envoyé.');
        },
        (err) => {
          console.log('Error occured:' , err);
          this.toastr.error(err.message, 'Error occured lors de lenvoie du mail');
        }
      );

  }
  
}