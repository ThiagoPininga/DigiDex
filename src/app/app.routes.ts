import { Routes } from '@angular/router';
import { DigimonListaComponent } from './componentes/digimon-lista/digimon-lista.component';
import { DigimonUnicoComponent } from './componentes/digimon-unico/digimon-unico.component';

export const routes: Routes = [
    { path: '', component: DigimonListaComponent },
    { path:'digimon/:name', component: DigimonUnicoComponent }
];
