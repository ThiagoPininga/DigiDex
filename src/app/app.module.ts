import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { DigimonComponent } from './componentes/digimon/digimon.component';
import { DigimonUnicoComponent } from './componentes/digimon-unico/digimon-unico.component';
import { HttpClientModule } from '@angular/common/http';
import { DigimonPipe } from './pipes/digimon.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DigimonComponent,
    DigimonUnicoComponent,
    DigimonPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
