import {Routes} from '@angular/router';

import {Ejemplo13Component} from './ejemplo13/ejemplo13.component';
import {UserComponent13} from './ejemplo13/user.component';

export const routes: Routes = [
  {
    path: '',
    title: 'App Home Page',
    component: Ejemplo13Component,
  },
  {
    path: 'user',
    title: 'App User Page',
    component: UserComponent13,
  },
];
