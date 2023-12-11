import { Component } from '@angular/core';
import { DigiApiService } from '../../services/digi-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-digimon-lista',
  templateUrl: './digimon-lista.component.html',
  styleUrl: './digimon-lista.component.css'
})
export class DigimonListaComponent {
  digimons: any;
  p: number = 1;

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
