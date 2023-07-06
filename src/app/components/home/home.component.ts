import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public page_title:    string;

  constructor(){
    this.page_title = 'Inicio';
  }
}
