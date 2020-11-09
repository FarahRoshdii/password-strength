
import { BrowserModule } from '@angular/platform-browser';  

import { NgModule } from '@angular/core';  

import { FormsModule } from '@angular/forms';  

import { AppComponent } from './app.component';  
5
import { passwordStrengthBarComponent } from './password-strength-bar/password-strength-bar.component';  

@NgModule({  

  declarations: [  

    AppComponent,  

    passwordStrengthBarComponent  

  ],  

  imports: [  

    BrowserModule,  

    FormsModule,  

  ],  

  providers: [],  

  bootstrap: [AppComponent]  

})  

export class AppModule { }  