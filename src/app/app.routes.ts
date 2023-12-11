import { Routes } from '@angular/router';
import { DigimonListaComponent } from './componentes/digimon-lista/digimon-lista.component';
import { DigimonUnicoComponent } from './componentes/digimon-unico/digimon-unico.component';
import { DigimonEvolComponent } from './componentes/digimon-evol/digimon-evol.component';

export const routes: Routes = [
    { path: '', component: DigimonListaComponent },
    { path:'digimon/:name', component: DigimonUnicoComponent },
    { path:'digimon/:name/evolucao', component: DigimonEvolComponent }
];
