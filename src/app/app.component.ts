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
      phone: '+01 555 555',
    };
  }

  showAdmin() {
    this.user = {
      username: 'admin',
      city: 'London',
      role: 'admin',
      phone: '+02 555 777',
    };
  }

  updateData(formData: any) {
    //console.log(formData);
    //this.user = formData;
    //this.user = { ...this.user, ...formData };
    console.log(this.user);
  }
}
