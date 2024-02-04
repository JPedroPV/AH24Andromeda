import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-part-builder',
  templateUrl: './part-builder.component.html',
  styleUrl: './part-builder.component.css'
})
export class PartBuilderComponent {
  constructor(
    private cartService: CartService
  ) { }

  getImage(type:string, otherfin?:boolean){
    var returnString: string = 'assets/';
    if(this.cartService.hasItemType(type))
        returnString += this.cartService.getItems().find(part => part.type === type)?.id;
    else {
      switch(type){
        case 'Nose':
          returnString += 10;
          break;
        case 'Crew':
          returnString += 20;
          break;
        case 'Cargo':
          returnString += 30;
          break;
        case 'Engine':
          returnString += 40;
          break;
        default:
          returnString += 50;
          break;
      }
    }
    if(otherfin)
      returnString += 'r';
    return returnString + '.png';
  }
}
