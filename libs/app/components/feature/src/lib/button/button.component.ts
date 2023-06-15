import { Component } from '@angular/core';

@Component({
  selector: 'socially-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  myFunction(arg: boolean): boolean {
    return arg;
  }
}
