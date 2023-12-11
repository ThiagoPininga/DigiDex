import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { DigimonComponent } from './componentes/digimon/digimon.component';
import { DigimonUnicoComponent } from './componentes/digimon-unico/digimon-unico.component';
import { HttpClientModule } from '@angular/common/http';
import { DigimonPipe } from './pipes/digimon.pipe';
import { DigimonListaComponent } from './componentes/digimon-lista/digimon-lista.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { DigimonEvolComponent } from './componentes/digimon-evol/digimon-evol.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DigimonComponent,
    DigimonUnicoComponent,
    DigimonPipe,
    DigimonListaComponent,
    DigimonEvolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
