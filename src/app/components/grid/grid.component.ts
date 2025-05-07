import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExtensionService } from 'src/app/services/extension.service';
import { dataRepresentation } from 'src/app/data-representation';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { ModalDialogComponent } from 'src/app/modal/modal-dialog/modal-dialog.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],

})
export class GridComponent implements OnInit{
  @Input()
  extension!: dataRepresentation;

  operation: any;
  @Output() 
  onDeleteExtension: EventEmitter<dataRepresentation> = new EventEmitter();
  @Output() 
  onToggleStatus: EventEmitter<dataRepresentation> = new EventEmitter()

  constructor(
    private extensionService : ExtensionService,
    public dialog: MatDialog
  ){}

  ngOnInit(): void {
  }

  // onDelete(extension: dataRepresentation) {
  //   this.onDeleteExtension.emit(extension)
  // }

  // onToggle(extension: dataRepresentation) {
  //   this.onToggleStatus.emit(extension)  
  // }

  openDialog(data :dataRepresentation, operation: 'delete' | 'deactivate' | 'activate', event: Event) {
    //const operation = data.isActive ? 'activate' : 'deactivate' ;

    const previousValue = data.isActive;
    // If triggered by checkbox change, immediately revert checkbox UI
    if (event) {
      (event.target as HTMLInputElement).checked = data.isActive;
      console.log("event target checkbox clicked", previousValue)
    }

    this.dialog.open(ModalDialogComponent,
      { panelClass: 'custom-dialog-container',
        data:{
          extension: data,
          operation: operation
        }},
      
    ).afterClosed().subscribe( (extension: any) => {
      console.log(extension);
      if(operation === 'delete') {
        if(extension.action){
          this.onDeleteExtension.emit(extension.form);
          console.log("deleted:", extension.form.name);
        }
      } else if (operation === 'activate' || operation === 'deactivate') {
        console.log('this is the operation', operation);
  
        if (extension.action) {
          data.isActive = !previousValue
          this.onToggleStatus.emit(extension.form);
        } else {
          (event.target as HTMLInputElement).checked = previousValue;

        }
        
      }
      
      // if(extension.action){
      //   if (operation === 'delete') {
      //     this.onDeleteExtension.emit(extension.form);
      //     console.log("deleted:", extension.form.name);
      //     } else {
      //     this.onToggleStatus.emit(extension.form);
      //   }
      // }
    });
  }
    
    
}
