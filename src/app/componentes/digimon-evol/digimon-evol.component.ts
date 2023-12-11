import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DigiApiService } from '../../services/digi-api.service';

@Component({
  selector: 'app-digimon-evol',
  templateUrl: './digimon-evol.component.html',
  styleUrl: './digimon-evol.component.css'
})
export class DigimonEvolComponent {
  digimonName: any;
  digimon_primeiro: any;
  digimon: any = {
    nome: "",
    img: '',
    nome_evol: '',
    img_evol: ''
  }

  constructor(private api: DigiApiService,private route: ActivatedRoute){}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.digimonName = params['name'];

      this.api.getDigimon(this.digimonName).subscribe((data) => {
        this.digimon_primeiro = data
        console.log(this.digimon_primeiro)

        this.digimon.nome = this.digimon_primeiro.name
        this.digimon.img = this.digimon_primeiro.images[0].href
        this.digimon.nome_evol = this.digimon_primeiro.nextEvolutions[0].digimon
        this.digimon.img_evol = this.digimon_primeiro.nextEvolutions[0].image

        console.log(this.digimon.img_evol)

      })
    })
  }
}
