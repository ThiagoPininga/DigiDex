import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DigiApiService {

  constructor(private http: HttpClient) { }

  getDigimon(){
    return this.http.get('https://digi-api.com/api/v1/digimon')
  }
}
