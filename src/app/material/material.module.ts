import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MatIconModule} from '@angular/material/icon'
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ModalDialogComponent } from '../modal/modal-dialog/modal-dialog.component';



const MaterialComponents = [
  MatSidenavModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatSelectModule,
  MatInputModule,
  MatFormFieldModule
];


@NgModule({
  declarations: [ModalDialogComponent],
  imports: [
    CommonModule,
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
