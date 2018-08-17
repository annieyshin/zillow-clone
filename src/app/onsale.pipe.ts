import { Pipe, PipeTransform } from '@angular/core';
import { Home } from './models/home';

@Pipe({
  name: "onsale",
  pure: false
})

export class OnSalesPipe implements PipeTransform {
  transform(input: Home[], desiredSale) {
    let output: Home[] = [];
    if (desiredSale === "onSaleHomes") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].onSale === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSale === "notOnSaleHomes") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].onSale === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
