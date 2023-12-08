import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-digimon',
  templateUrl: './digimon.component.html',
  styleUrl: './digimon.component.css'
})
export class DigimonComponent {
  @Input() digimon: any;
}
