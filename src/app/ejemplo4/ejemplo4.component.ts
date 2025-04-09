import {Component} from '@angular/core';

@Component({
  selector: 'app-ejemplo4',
  template: `
  <p>EJEMPLO 4</p>
  @if (isLoggedIn) {
    <p>Servidor encendido</p>
  } 
  @else {
  <p>Servidor apagado</p>}
`,
})
export class Ejemplo4Component {
  isLoggedIn = true;
}
