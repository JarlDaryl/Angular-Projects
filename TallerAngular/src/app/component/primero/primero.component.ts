import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-primero',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './primero.component.html',
  styleUrl: './primero.component.scss',
})
export class PrimeroComponent {
  inputValue: string = "";

  numero1: number = 10;
  persona: { name: string; surname: string } = {
    name: 'Luis',
    surname: 'Arques',
  };

  aumentarNumero(): number {
    this.numero1++;
    return this.numero1;
  }
}
