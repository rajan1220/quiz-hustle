// forgot-password.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  onSendResetLink() {
    alert('Reset link has been sent to your email.');
  }
}
