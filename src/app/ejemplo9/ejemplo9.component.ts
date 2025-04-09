import {Component} from '@angular/core';
import {ChildComponent} from './child.component';

@Component({
  selector: 'app-ejemplo9',
  template: `
  <p>EJEMPLO 9</p>
    <app-child (addItemEvent)="addItem($event)" />
    <p>🐢 all the way down {{ items.length }}</p>
  `,
  imports: [ChildComponent],
})
export class Ejemplo9Component {
  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
}
