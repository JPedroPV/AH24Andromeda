import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Part, parts } from '../parts';
import { CartService } from '../cart.service';
import {
  MatDialog,
} from '@angular/material/dialog';
import { ConfirmSwitchComponent } from './confirm-switch/confirm-switch.component';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface DialogData {
  newPart: Part;
  oldPart: Part;
}

@Component({
  selector: 'app-part-details',
  templateUrl: './part-details.component.html',
  styleUrl: './part-details.component.css'
})
export class PartDetailsComponent implements OnInit{

  part: Part | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const partIdFromRoute = Number(routeParams.get('partId'));
    this.part = parts.find(part => part.id === partIdFromRoute);
  }

  addToCart(part: Part) {
    if(this.cartService.hasItemType(part.type)) {
      const foundItem = this.cartService.getItems().find(item => item.type === part.type);
      if(foundItem && foundItem.id !== part.id){
        this.dialog.open(ConfirmSwitchComponent, {
          data: {newPart: part, oldPart: this.cartService.hasItemType(part.type)},
          disableClose: true,
        }).afterClosed().subscribe(swap => {
          if(swap){
            this.cartService.addToCart(part);
            this._snackBar.open('Swapped!', "Ok");
          }
        });
      }
      else {
        
        this._snackBar.open(part.name + ' is already in the cart!', "Ok");
      }
    }
    else {
      this.cartService.addToCart(part);
      this._snackBar.open(part.name + ' added to cart!', "Ok");
    }
  }

  goBack() {
    window.history.back();
  }
}