import { Component } from '@angular/core';
import { UserComponent } from './user.component';  // Importa UserComponent

@Component({
  selector: 'app-ejemplo3',
  template: `
  <p>EJEMPLO 3</p>
    <section>
      <app-user></app-user>  <!-- Aquí se incluye el componente User -->
    </section>
  `,
  imports: [UserComponent]  // Asegúrate de que UserComponent esté en imports
})
export class Ejemplo3Component {}
