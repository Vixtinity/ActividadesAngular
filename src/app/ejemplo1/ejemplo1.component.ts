import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo1',
  template: `
  <p>EJEMPLO 1</p>
    Hello Universe
  `,
  styles: [
    `
      :host {
        color: #a144eb;
      }
    `
  ],
  standalone: true  // Coloca aquí `standalone: true`
})
export class Ejemplo1Component {}
