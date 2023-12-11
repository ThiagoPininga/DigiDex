import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Digimon } from '../../interfaces/digimon';
import { DigiApiService } from '../../services/digi-api.service';

@Component({
  selector: 'app-digimon-unico',
  templateUrl: './digimon-unico.component.html',
  styleUrl: './digimon-unico.component.css'
})
export class DigimonUnicoComponent {
  digimon_name: any;
  digimon_primeiro: any;
  digimon: Digimon = {
    name: '',
    img: '',
    type: '',
    level: '',
    atribute: '',
    descricao: ''
  }

  constructor(private route: ActivatedRoute, private api:DigiApiService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.digimon_name = params['name'];
      this.api.getDigimon(this.digimon_name).subscribe((data) => {
        this.digimon_primeiro = data
        console.log(this.digimon_primeiro)
        this.digimon.name = this.digimon_primeiro.name
        this.digimon.img = this.digimon_primeiro.images[0].href
        this.digimon.type = this.digimon_primeiro.types[0].type
        this.digimon.level = this.digimon_primeiro.levels[0].level
        this.digimon.atribute = this.digimon_primeiro.attributes[0].attribute
        this.digimon.descricao = this.digimon_primeiro.descriptions[1].description

        console.log(this.digimon)
      })
    });
  }

  redirecionarParaEvolucao() {
    const urlEvolucao = `/digimon/${this.digimon.name}/evolucao`;

    this.router.navigate([urlEvolucao]);
  }
}
