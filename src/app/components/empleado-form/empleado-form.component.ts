// src/app/components/empleado-form/empleado-form.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../../models/empleado.model';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.css']
})
export class EmpleadoFormComponent {
  // Objeto ViewModel que se sincroniza bidireccionalmente con la Vista
  nuevoEmpleado: Empleado = {
    nombre: '',
    cargo: '',
    departamento: 'Tecnología',
    salario: 0
  };

  constructor(
    private empleadoService: EmpleadoService,
    private router: Router
  ) {}

  // Acción enviada al Modelo
  guardar(): void {
    if (this.nuevoEmpleado.nombre.trim()) {
      this.empleadoService.agregarEmpleado(this.nuevoEmpleado).subscribe(() => {
        this.router.navigate(['/empleados']);
      });
    }
  }
}

