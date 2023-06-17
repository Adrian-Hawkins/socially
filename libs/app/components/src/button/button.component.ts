import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text!: string;
  @Output() evnt = new EventEmitter<void>();

  show = false;
  onClick(): void {
    this.show = !this.show;
    setTimeout(() => {
      this.show = !this.show;
    }, 3000);
    this.evnt.emit();
  }
}
