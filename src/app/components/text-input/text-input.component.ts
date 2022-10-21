import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent {
  @Input() label: string = '';
  @Input() width: string = '100%';
  @Input() disabled: boolean = false;
  @Input() error: string = '';
  @Input() type: string = 'text';

  @Output() onChangeInput: EventEmitter<string> = new EventEmitter();
  @Output() onBlurInput: EventEmitter<string> = new EventEmitter();

  public value: string;

  constructor() {
    this.value = '';
  }

  onChange() {
    this.onChangeInput.emit(this.value);
  }

  onBlur() {
    this.onBlurInput.emit(this.value);
  }
}
