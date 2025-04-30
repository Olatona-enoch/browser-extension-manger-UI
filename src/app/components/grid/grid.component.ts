import { Component, Input, OnInit } from '@angular/core';
// import { ExtensionService } from 'src/app/services/extension.service';
import { dataRepresentation } from 'src/app/data-representation';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit{
  @Input()
  extension!: dataRepresentation;
  constructor(
    // private extensionService : ExtensionService
  ){}

  ngOnInit(): void {
  }

}
