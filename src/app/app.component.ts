import { Component } from '@angular/core';
import { DigiApiService } from './services/digi-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  digimons: any;

  constructor(private api:DigiApiService){}

  ngOnInit() {
    this.api.getDigimon().subscribe((value) => {
      this.digimons = value
      this.digimons = this.digimons.content
      console.log(this.digimons)
    })
  }
}
