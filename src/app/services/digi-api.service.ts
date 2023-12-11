import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DigiApiService {

  constructor(private http: HttpClient) { }

  getDigimon(nome: string){
    const url = `https://digi-api.com/api/v1/digimon/${nome}?pageSize=2000&page=0`
    
    return this.http.get(url)
  }
}
