import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email: string = '';
  emailSent: boolean = false;
  emailError: boolean = false; // Add to track invalid email input

  constructor(private router: Router) {}

  onSubmit() {
    // Basic email validation (you can expand this with a regex if needed)
    if (this.email && this.email.includes('@')) {
      // Logic to send reset password email (e.g., call an API)
      this.emailSent = true; // Simulate email sent
      this.emailError = false; // Reset error flag
    } else {
      this.emailError = true; // Set error flag if email is invalid
      this.emailSent = false; // Reset success flag
    }
  }

  goToLogin() {
    this.router.navigate(['/login']); // Redirect to login page
  }
}
