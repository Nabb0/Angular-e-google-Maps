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

  constructor() {
    this.center = { lat: 45.506738, lng: 9.190766 };
    this.position = this.center;
    this.label = "ciao";
    this.circleOptions = { fillColor: 'red' };
  }

  changeColor(color: string): void {
    switch (color) {
      case 'red':
        this.circleOptions.fillColor = 'red';
        break;
      case 'yellow':
        this.circleOptions.fillColor = 'yellow';
        break;
      case 'green':
        this.circleOptions.fillColor = 'green';
        break;
      default:
        this.circleOptions.fillColor = 'red';
        break;
    }
    console.log(this.circleOptions);
  }
  }
