import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatDividerModule } from '@angular/material/divider'; 
import { MatIconModule } from '@angular/material/icon'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-primer-ejercicio',
  standalone: true,
  imports: [FormsModule,MatButtonModule,MatCardModule,MatFormFieldModule,MatInputModule,MatDividerModule,MatIconModule,CommonModule],
  templateUrl: './primer-ejercicio.component.html',
  styleUrl: './primer-ejercicio.component.css'
})
export class PrimerEjercicioComponent {
  cantidad: number | null = null; 
  precioUnitario: number | null = null; 
  total: number = 0;
  descuento: number = 0;
  totalConDescuento: number = 0;

  calcular(): void {
    this.total = (this.cantidad || 0) * (this.precioUnitario || 0); 
    if (this.cantidad && this.cantidad > 20) {
      this.descuento = this.total * 0.1;
    } else if (this.cantidad && this.cantidad > 10) {
      this.descuento = this.total * 0.05;
    } else {
      this.descuento = 0;
    }
    this.totalConDescuento = this.total - this.descuento;
  }
}