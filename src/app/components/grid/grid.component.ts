import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { ExtensionService } from 'src/app/services/extension.service';
import { dataRepresentation } from 'src/app/data-representation';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],

})
export class GridComponent implements OnInit{
  @Input()
  extension!: dataRepresentation;
  @Output() 
  onDeleteExtension: EventEmitter<dataRepresentation> = new EventEmitter();
  @Output() 
  onToggleStatus: EventEmitter<dataRepresentation> = new EventEmitter()

  constructor(
    // private extensionService : ExtensionService
    public dialog: MatDialog
  ){}

  ngOnInit(): void {
  }

  onDelete(extension: dataRepresentation) {
    this.onDeleteExtension.emit(extension)
  }

  onToggle(extension: dataRepresentation) {
    this.onToggleStatus.emit(extension)  
  }
    
}
