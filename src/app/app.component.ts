import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Hello World';
  imageUrl: string =
    'https://media.istockphoto.com/id/1188728777/photo/free-outdoor-library.jpg?s=1024x1024&w=is&k=20&c=bIs7AS1g9dbX3zwZ0TdBlLT-oYb6SambJt4T1mUHU1Y=';
}
