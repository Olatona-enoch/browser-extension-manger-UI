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
  loading: boolean = false;
  operation: boolean = false
  serviceName: any;
  serviceDescription: any;

  constructor(
    private extensionService: ExtensionService
  ){}

  ngOnInit(): void {
    // this.extensionService.getAllExtensions()
    // .subscribe((extensions) => (this.extensions = extensions));
    this.getAllExtensions();
  }
  getAllExtensions(){
    this.loading = true;
    this.activeFilter = 'all';
    this.extensionService.getAllExtensions()
    .subscribe((extensions) => {
      setTimeout(() => {
        this.extensions = extensions;
        this.loading = false;  
      }, 3000);
    });
  }

  getActiveExtensions(){
    this.loading = true;
    this.activeFilter = 'active';
    this.extensionService.getActiveExtensions()
    .subscribe(extensions => {
      setTimeout(() => {
        this.extensions = extensions;
        this.loading = false;  
      }, 3000);
    });
  }

  getInactiveExtensions() {
    this.loading = true;
    this.activeFilter = 'inactive';
    this.extensionService.getInactiveExtensions()
    .subscribe(extensions => {
      setTimeout(() => {
        this.extensions = extensions;
        this.loading = false;  
      }, 3000);
    });
  }

  deleteExtension(extension: dataRepresentation) {
    this.extensionService.deleteExtension(extension)
    .subscribe(() => this.extensions = this.extensions.filter(ext => ext.id !==  extension.id));
    const alertMessage = document.querySelector(".alert")?.querySelector("span");
    this.serviceName = extension.name;
    this.serviceDescription = "Deleted successfully"
    this.operation = true;
    setTimeout(() => {
      this.operation = false;
    }, 3000);
    
  }

  toggleStatus(extension: dataRepresentation) {
    // extension.isActive = !extension.isActive;
    console.log("toggled:",extension.isActive);
    this.extensionService.updateExtensionStatus(extension)
    .subscribe();
    this.serviceName = extension.name;
    this.serviceDescription = extension.isActive ? "is now active" : "has been deactivated"
    this.operation = true;
    setTimeout(() => {
      this.operation = false;
    }, 3000);
  }
        
}

