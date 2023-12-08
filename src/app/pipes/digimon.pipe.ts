import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'digimon'
})
export class DigimonPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
