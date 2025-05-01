import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  darktheme!: boolean;

  changeTheme() {
    this.darktheme = !this.darktheme;
    this.applyTheme();
    console.log("change theme")
  }
  applyTheme() {
    const html = document.documentElement;
    // const html = document.querySelector('html');
    const newTheme = this.darktheme ? 'dark' : 'light';

    html.classList.remove('dark', 'light');
    html.classList.add(newTheme);
    html.setAttribute('data-theme', newTheme);
  }

  title = 'Browser-extension-manager';
}
