import {Component} from '@angular/core';

@Component({
  selector: 'app-ejemplo7',
  template: `
  <p>EJEMPLO 7</p>
    <section (mouseover)="onMouseOver()">
      There's a secret message for you, hover to reveal 👀
      {{ message }}
    </section>
  `,
})
export class Ejemplo7Component {
  message = '';

  onMouseOver() {
    this.message = 'Way to go 🚀';
}
}
