import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-open-file',
  templateUrl: './open-file-button.component.html',
  styleUrls: ['./open-file-button.component.scss']
})
export class OpenFileButtonComponent {
  @Input() label: string = 'Open File';
  @Input() color: string = '';
  @Output() fileSelected = new EventEmitter<File>();

  onSelect(event: any) {
    this.fileSelected.emit(event.target.files[0]);
  }
}
