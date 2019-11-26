import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChoicesComponent } from './choices/choices.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    
    FormsComponent,
    
    SidebarComponent,
    
    ChoicesComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
 
})
export class AppModule { 

}
