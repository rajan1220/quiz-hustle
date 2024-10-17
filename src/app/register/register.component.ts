// register.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  passwordMismatch: boolean = false;

  constructor(private router: Router) {}

  onRegister() {
    // Check if passwords match
    if (this.password !== this.confirmPassword) {
      this.passwordMismatch = true;
      return;
    }

    // Simulate registration success (you can replace this with actual API call)
    alert('Registration successful!');
    
    // Redirect to login page after successful registration
    this.router.navigate(['/login']);
  }
}
