// src/app/components/empleado-lista/empleado-lista.component.ts
import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado.model';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-empleado-lista',
  templateUrl: './empleado-lista.component.html',
  styleUrls: ['./empleado-lista.component.css']
})
export class EmpleadoListaComponent implements OnInit {
  // Propiedades expuestas a la Vista (Estado local)
  titulo: string = 'Nómina de Empleados de la Empresa';
  listaEmpleados: Empleado[] = [];

  // Inyección de Dependencias: Conecta el Controlador con el Modelo
  constructor(private empleadoService: EmpleadoService) {}

  // Hook del ciclo de vida para cargar datos del Modelo
  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos() {
    this.empleadoService.getEmpleados().subscribe(data => {
      this.listaEmpleados = data;
    });
  }

  // Manejador de evento invocado desde la Vista
  borrarEmpleado(id: number | undefined) {
    if (id) {
      this.empleadoService.eliminarEmpleado(id).subscribe(() => {
        this.cargarDatos();
      });
    }
  }
}

