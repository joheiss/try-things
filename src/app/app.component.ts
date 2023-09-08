import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'try-things';

  onFileSelected(file: File) {
    console.log("File selected: ", file);
  }
}
