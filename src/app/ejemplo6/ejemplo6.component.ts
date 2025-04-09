import {Component} from '@angular/core';

@Component({
  selector: 'app-ejemplo6',
  styleUrls: ['ejemplo6.component.css'],
  template: `
  <p> EJEMPLO 6 </p>
  <div [contentEditable]="isEditable"></div>`,
})
export class Ejemplo6Component {
  isEditable = true;
}
