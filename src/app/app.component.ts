import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mat';

  isChecked = false;

  onChange($event)
  {
    console.log($event)
  }
}
