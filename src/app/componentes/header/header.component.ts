import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  digmon_pesquisa: string = ''

  onSubmit(){
    console.log(this.digmon_pesquisa)
  }
}
