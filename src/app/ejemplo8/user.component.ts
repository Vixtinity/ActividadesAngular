import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
  <p>EJEMPLO 8</p>
  <p>The user's occupation is {{occupation}}</p>
  `,
})

export class UserComponent {
    @Input() occupation = 'Simram';
  }