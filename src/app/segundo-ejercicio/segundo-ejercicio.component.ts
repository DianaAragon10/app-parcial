import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-segundo-ejercicio',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,CommonModule],
  templateUrl: './segundo-ejercicio.component.html',
  styleUrl: './segundo-ejercicio.component.css'
})
export class SegundoEjercicioComponent {
  anio: number| null= null;      
  resultado: string | null = null; 

  verificarBisiesto(): void {
    if (this.anio === null || this.anio <= 0) { 
      alert('Por favor ingresa un año válido.');
      return;
    }

    if ((this.anio % 4 === 0 && this.anio % 100 !== 0) || (this.anio % 400 === 0)) {
      this.resultado = 'es';
    } else {
      this.resultado = 'no es';
    }
  }
}


