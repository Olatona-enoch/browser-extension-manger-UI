import { Component, OnInit } from '@angular/core';
import { ExtensionService } from 'src/app/services/extension.service';
import { dataRepresentation } from 'src/app/data-representation';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {
  extensions: dataRepresentation[] = [];
  activeFilter: 'all' | 'active' | 'inactive' = 'all'; // To track the active filter

  constructor(
    private extensionService: ExtensionService
  ){}

  ngOnInit(): void {
    // this.extensionService.getAllExtensions()
    // .subscribe((extensions) => (this.extensions = extensions));
    this.getAllExtensions();
  }
  getAllExtensions(){
    this.activeFilter = 'all';
    this.extensionService.getAllExtensions()
    .subscribe((extensions) => (this.extensions = extensions));
  }

  getActiveExtensions(){
    this.activeFilter = 'active';
    this.extensionService.getActiveExtensions()
    .subscribe(extensions => this.extensions = extensions);
  }
  getInactiveExtensions() {
    this.activeFilter = 'inactive';
    this.extensionService.getInactiveExtensions()
    .subscribe(extensions => this.extensions = extensions);
  }

  deleteExtension(extension: dataRepresentation) {
    this.extensionService.deleteExtension(extension)
    .subscribe(() => this.extensions = this.extensions.filter(ext => ext.id !==  extension.id));
  }

  toggleStatus(extension: dataRepresentation) {
    // extension.isActive = !extension.isActive;
    console.log("toggled:",extension.isActive);
    this.extensionService.updateExtensionStatus(extension)
    .subscribe();
  }
        
}

