import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent {
  username: string = '';
  password: string = '';
  mail: string = '';

  constructor(private router: Router) {}

  onSubmit(): void {
    if (!this.username) {
      alert('Please enter your username');
    } else if (!this.password) {
      alert('Please enter your password');
    } else if (this.mail) {
      alert('Please enter your email');
    } else {
      this.router.navigate(['/music']);
    }
  }
}
