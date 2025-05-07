import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent {
  // operation: 'delete' | 'deactivate' | 'activate';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matDialogRef: MatDialogRef <ModalDialogComponent>
    
  ) {
    console.log(data.extension);
    
  }
  extension: any = this.data?.extension
  operation = this.data?.operation

  close(){
    this.matDialogRef.close({action: false})
  }

  submit(){
    this.matDialogRef.close({action: true, form: this.extension })
  }

}
