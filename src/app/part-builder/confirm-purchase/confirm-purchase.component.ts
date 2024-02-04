import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CartService } from '../../cart.service';
import { Part } from '../../parts';

@Component({
  selector: 'app-confirm-purchase',
  templateUrl: './confirm-purchase.component.html',
  styleUrl: './confirm-purchase.component.css'
})
export class ConfirmPurchaseComponent {

  parts: Part[] = this.cartService.getItems();

  constructor(
    private cartService: CartService,
    public dialogRef: MatDialogRef<ConfirmPurchaseComponent>,
  ) { }

  onConfirm(){
    this.cartService.clearCart();
    this.dialogRef.close(true);
  }
  
  onCancel(){
    this.dialogRef.close(false);
  }

}
