import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cuarto-ejercicio',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, CommonModule],
  templateUrl: './cuarto-ejercicio.component.html',
  styleUrl: './cuarto-ejercicio.component.css'
})
export class CuartoEjercicioComponent {
  limite: number | null = null; 
  resultados: { numero: number; esPerfecto: boolean }[] = []; 

  calcularNumerosPerfectos(): void {
    if (this.limite === null || this.limite <= 0) {
      alert('Por favor ingresa un número límite válido.');
      return;
    }

    this.resultados = []; 

    for (let num = 1; num <= this.limite; num++) {
      let sumaDivisores = 0;

      for (let divisor = 1; divisor < num; divisor++) {
        if (num % divisor === 0) {
          sumaDivisores += divisor;
        }
      }

      const esPerfecto = sumaDivisores === num;
      this.resultados.push({ numero: num, esPerfecto });
    }
  }
}


