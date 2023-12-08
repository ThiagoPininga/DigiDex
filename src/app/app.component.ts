import { Component } from '@angular/core';
import { DigiApiService } from './services/digi-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  digimon: any = {}

  constructor(private api:DigiApiService){}

  ngOnInit() {
    this.api.getDigimon().subscribe(data => {
      this.digimon = data;
    })
  }
}
