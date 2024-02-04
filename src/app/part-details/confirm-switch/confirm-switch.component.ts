import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { DialogData } from '../part-details.component';

@Component({
  selector: 'app-confirm-switch',
  templateUrl: './confirm-switch.component.html',
  styleUrl: './confirm-switch.component.css'
})
export class ConfirmSwitchComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmSwitchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onConfirm(){
    this.dialogRef.close(true);
  }
  
  onCancel(){
    this.dialogRef.close(false);
  }
}
