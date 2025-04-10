import { Component } from '@angular/core';
import { Ejemplo1Component } from './ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './ejemplo3/ejemplo3.component';
import { Ejemplo4Component } from './ejemplo4/ejemplo4.component';
import { Ejemplo5Component } from './ejemplo5/ejemplo5.component';
import { Ejemplo6Component } from './ejemplo6/ejemplo6.component';
import { Ejemplo7Component } from './ejemplo7/ejemplo7.component';
import { Ejemplo8Component } from './ejemplo8/ejemplo8.component';
import { Ejemplo9Component } from './ejemplo9/ejemplo9.component';
import { Ejemplo10Component } from './ejemplo10/ejemplo10.component';
import { Ejemplo11Component } from './ejemplo11/ejemplo11.component';
import { Ejemplo12Component } from './ejemplo12/ejemplo12.component';
import { Ejemplo13Component } from './ejemplo13/ejemplo13.component';
import {RouterOutlet, RouterLink} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `
    <nav>
      <a routerLink="/">Home</a>
      |
      <a routerLink="/user">User</a>
    </nav>
    <router-outlet />
  `,
  standalone: true,
  imports: [RouterOutlet, RouterLink, Ejemplo1Component, Ejemplo2Component, Ejemplo3Component, Ejemplo4Component, Ejemplo5Component, Ejemplo6Component, Ejemplo7Component, Ejemplo8Component, Ejemplo9Component, Ejemplo10Component, Ejemplo11Component, Ejemplo12Component, Ejemplo13Component]
})
export class AppComponent {}
