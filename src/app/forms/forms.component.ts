import { Component, OnInit } from '@angular/core';
import{NgForm, FormControl} from "@angular/forms";
import {FormBuilder, FormGroup} from "@angular/forms";
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})

export class FormsComponent implements OnInit
 {
  myForm:FormGroup;
  formBuilder : FormBuilder;
constructor(){}
 
    ngOnInit(){
      this.myForm = new FormGroup({
       // Mtricule:new FormControl(),
        Email: new FormControl(),
        Choix1 : new FormControl(),
        Choix2 : new FormControl(),
        Choix3 : new FormControl()
      })
    }
    onFormSubmit(){}

 
}
