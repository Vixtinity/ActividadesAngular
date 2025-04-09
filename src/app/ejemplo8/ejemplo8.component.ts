import {Component} from '@angular/core';
import {UserComponent} from './user.component';

@Component({
  selector: 'app-ejemplo8',
  template: `<app-user></app-user>`,
  imports: [UserComponent],
})
export class Ejemplo8Component {}
