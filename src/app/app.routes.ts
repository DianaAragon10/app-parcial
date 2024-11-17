import { Routes } from '@angular/router';
import { PrimerEjercicioComponent } from './primer-ejercicio/primer-ejercicio.component';
import { SegundoEjercicioComponent } from './segundo-ejercicio/segundo-ejercicio.component';
import { TercerEjercicioComponent } from './tercer-ejercicio/tercer-ejercicio.component';
import { CuartoEjercicioComponent } from './cuarto-ejercicio/cuarto-ejercicio.component';

export const routes: Routes = [
    {path: "Primerejercicio", component:PrimerEjercicioComponent},
    {path: "Segundoejercicio", component:SegundoEjercicioComponent},
    { path: "Tercerejercicio", component:TercerEjercicioComponent },
    { path: "Cuartoejercicio", component:CuartoEjercicioComponent }
];
