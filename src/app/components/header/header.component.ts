import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() 
  onChangeTheme: EventEmitter<any> = new EventEmitter()
  
  changeTheme() {
    this.onChangeTheme.emit();
    console.log("change button clicked");
  }

}
