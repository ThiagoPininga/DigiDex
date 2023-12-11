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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DigimonComponent,
    DigimonUnicoComponent,
    DigimonPipe,
    DigimonListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
