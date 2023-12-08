import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { DigiApiService } from './services/digi-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  digimons: any;

  constructor(private api:DigiApiService, private route: ActivatedRoute){}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const pesquisa = params['pesquisa'] || ''; 

      this.api.getDigimon(pesquisa).subscribe((value) => {
        this.digimons = value; 
        this.digimons = this.digimons.content
        console.log(this.digimons);
      });
    });
    
  }
}
