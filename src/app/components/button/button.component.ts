import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() type: string = 'button';
  @Input() width: string = 'max-content';

  @Output() onClick = new EventEmitter<void>();

  action() {}

  constructor() {
    this.onClick.emit();
  }

  ngOnInit(): void {}
}
