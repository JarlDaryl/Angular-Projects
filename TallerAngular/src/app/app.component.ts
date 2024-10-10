import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeroComponent } from './component/primero/primero.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimeroComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'TallerAngular';
}
