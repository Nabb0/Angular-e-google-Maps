import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server mappe';
  //Aggiungiamo latitudine e longitudine di un luogo
  center : any;
  position : any;
  label :string;
  center2 : any;
  label2 :string;
  circleOptions: { fillColor: string; };
  constructor()
  {
    this.center={lat: 45.506738, lng: 9.190766};
    this.position = this.center;
    this.label = "ciao";
    this.center2={lat: 45.514089, lng: 9.190766};
    this.position = this.center;
    this.label2 = "..";
    this.circleOptions = {fillColor : 'red'}
  }
  

}