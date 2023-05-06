import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps' // Importa questo modulo
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule, // Importa questo modulo
    FormsModule // Importa questo modulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }