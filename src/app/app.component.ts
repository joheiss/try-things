import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  useDarkTheme = false;

  applyTheme(event: MatSlideToggleChange) {
    this.useDarkTheme = event.checked;
  }

  onFileSelected(file: File) {
    console.log("File selected: ", file);
  }
}
