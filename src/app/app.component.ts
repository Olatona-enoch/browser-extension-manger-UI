import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  darktheme: boolean = false;

  ngOnInit(): void {
    const storedTheme = localStorage.getItem('theme');
    this.darktheme = storedTheme === 'dark';

    // Set initial theme on <html> and <body>
    this.applyTheme();
  }

  changeTheme() {
    this.darktheme = !this.darktheme;
    localStorage.setItem('theme', this.darktheme ? 'dark' : 'light');
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
