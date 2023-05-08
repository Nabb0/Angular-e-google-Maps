import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server mappe';
  center: any;
  position: any;
  label: string;
  circleOptions: { fillColor: string };
  markerOptions!: google.maps.MarkerOptions;
  vertices: google.maps.LatLngLiteral[];
  triangleOption:any ;
  constructor() {
    this.center = { lat: 45.506738, lng: 9.190766 };
    this.position = this.center;
    this.label = "ciao";
    this.circleOptions = { fillColor: 'red' };
    this.triangleOption = { fillColor: 'red' };
    this.vertices = [
      {  lat: this.center.lat + 0.001, lng: this.center.lng - 0.002 },
      {  lat: this.center.lat, lng: this.center.lng },
      {  lat: this.center.lat - 0.001, lng: this.center.lng - 0.002}
      ];
    
    let iconData: google.maps.Icon = {
      url: './assets/img/cat_acrobat.ico',
      scaledSize: new google.maps.Size(60, 60)
    }
    this.markerOptions = { icon: iconData };



  }

  changeColor(color: string): void {
    switch (color) {
      case 'red':
        this.circleOptions = { fillColor: 'red' };
        break;
      case 'yellow':
        this.circleOptions = { fillColor: 'yellow' };
        break;
      case 'green':
        this.circleOptions = { fillColor: 'green' };
        break;
      default:
        this.circleOptions = { fillColor: 'red' };
        break;
    }
    console.log(this.circleOptions);
  }
  changeRectangleColor(color: string): void {
    switch (color) {
      case 'red':
        this.triangleOption = { fillColor : 'red' };
        break;
      case 'yellow':
        this.triangleOption = {  fillColor : 'yellow' };
        break;
      case 'green':
        this.triangleOption = { fillColor : 'green' };
        break;
      default:
        this.triangleOption = {  fillColor : 'blue' };
        break;
    }
    console.log('Rectangle color changed to:', color);
  }
  
}
