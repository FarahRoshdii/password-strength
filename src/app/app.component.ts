import { Component, OnInit } from '@angular/core';  

@Component({  

  selector: 'app-root',  

  templateUrl: './app.component.html',  

  styleUrls: ['./app.component.css']  

})  

export class AppComponent implements OnInit {  

  public account = {  

    password: null  

  };  

  public barLabel: string = "Password strength:";  

  constructor() { }  

  ngOnInit() {  

  }  

}  