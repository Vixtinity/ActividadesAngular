import { Component } from '@angular/core';
import { Ejemplo1Component } from './ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './ejemplo3/ejemplo3.component';
import { Ejemplo4Component } from './ejemplo4/ejemplo4.component';
import { Ejemplo5Component } from './ejemplo5/ejemplo5.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [Ejemplo1Component, Ejemplo2Component, Ejemplo3Component, Ejemplo4Component, Ejemplo5Component]  // Asegúrate de importar los componentes aquí
})
export class AppComponent {}
