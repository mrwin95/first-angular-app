import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `<div>
    <h1>Navbar</h1>
  </div>`,
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  title = 'Angular 4 Project';
}
