import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { GridComponent } from './components/grid/grid.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';
import { MaterialModule } from './material/material.module';
import { ModalDialogComponent } from './modal/modal-dialog/modal-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainBodyComponent,
    GridComponent,
    EmptyStateComponent,
  ],
  // entryComponents: [ ModalDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
