import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tercer-ejercicio',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, CommonModule],
  templateUrl: './tercer-ejercicio.component.html',
  styleUrl: './tercer-ejercicio.component.css'
})
export class TercerEjercicioComponent {
  calificacion1: number | null = null;
  calificacion2: number | null = null;
  calificacion3: number | null = null;
  resultado: string | null = null;

  calcularPromedio(): void {
    if (this.calificacion1 === null || this.calificacion2 === null || this.calificacion3 === null) {
      alert('Por favor ingresa todas las calificaciones.');
      return;
    }
  
    const promedio = (this.calificacion1 + this.calificacion2 + this.calificacion3) / 3;
  
    if (promedio >= 70) {
      this.resultado = 'Aprobado';
    } else {
      this.resultado = 'Reprobado';
    }
  }
}  
