import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {
  Roles: any = ['Sistemas', 'Recursos Humanos', 'Administrativo'];
  TipoUsuario: any = ['Encargado', 'Empleado', 'Alumno'];

  constructor() { }

  ngOnInit(): void {
  }

}
