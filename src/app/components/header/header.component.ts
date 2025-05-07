import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() 
  onChangeTheme: EventEmitter<any> = new EventEmitter()
  @Input() 
  darktheme: boolean = false;
  
  changeTheme() {
    this.darktheme = !this.darktheme
    this.onChangeTheme.emit(this.darktheme);
    console.log("change button clicked", this.darktheme);
  }

}
