import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo2',
  template: `
  <p>EJEMPLO 2</p>
  Hello {{ city }}, {{ 1 + 1 }}`,
})
export class Ejemplo2Component {
    city = 'San Francisco';
}
