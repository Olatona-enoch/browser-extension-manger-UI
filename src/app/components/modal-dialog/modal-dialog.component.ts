import { Component, Input } from '@angular/core';
import { dataRepresentation } from 'src/app/data-representation';


@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css'],

})
export class ModalDialogComponent {
  @Input()
  extension!: dataRepresentation;

  @Input()
  onDelete(extension: dataRepresentation) {
  }
    
}