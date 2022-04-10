import { Component, VERSION } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user: User;

  constructor() {
    this.showGuest();
  }

  showGuest() {
    this.user = {
      username: 'guest',
      city: 'New York',
      role: 'guest',
    };
  }

  updateData(formData: any) {
    console.log(formData);
  }
}
