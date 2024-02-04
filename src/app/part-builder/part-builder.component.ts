import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { parts } from '../parts';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmPurchaseComponent } from './confirm-purchase/confirm-purchase.component';

@Component({
  selector: 'app-part-builder',
  templateUrl: './part-builder.component.html',
  styleUrl: './part-builder.component.css'
})
export class PartBuilderComponent {

  parts = [...parts];

  constructor(
    private cartService: CartService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
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

  onClick(partsType: string){
    const foundItem = this.cartService.getItems().find(part => part.type === partsType);
      if (foundItem) {
        return ['/parts', foundItem.id];
      }
    return undefined
  }

  getPrice(partsType: string){
    const foundItem = this.cartService.getItems().find(part => part.type === partsType);
    if(foundItem)
      return foundItem.price;
    return 0;
  }

  getTotalPrice(){
    return this.cartService.getTotalPrice();
  }

  confirmPurchase(){
    if(this.cartService.getTotalPrice() > 0)
      this.dialog.open(ConfirmPurchaseComponent, {
        disableClose: true,
        }).afterClosed().subscribe(result => {
          if(result) {
            this._snackBar.open('Purchase Confirmed!', "Ok", {
              duration: 1500
            });
          }
        });
    else
      this._snackBar.open('Cart is empty', "Ok", {
        duration: 1500
      });
  }

  clearCart(){
    this.cartService.clearCart();
    this._snackBar.open('Cart Cleared', "Ok", {
      duration: 1500
    });
  }
}
