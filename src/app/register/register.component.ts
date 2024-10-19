import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
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

  constructor(private dialog: MatDialog, private router: Router) {}

  onRegister() {
    if (this.password !== this.confirmPassword) {
      this.passwordMismatch = true; // Show password mismatch error
    } else {
      this.passwordMismatch = false; // Clear any previous error

      // Registration logic here (e.g., call an API to register the user)

      // Open the success dialog
      const dialogRef = this.dialog.open(RegistrationSuccessDialogComponent);

      // Handle the user's choice from the dialog
      dialogRef.afterClosed().subscribe(result => {
        if (result === 'confirm') {
          this.router.navigate(['/home']); // Redirect to home on confirmation
        }
      });
    }
  }
}

@Component({
  selector: 'app-registration-success-dialog',
  template: `
    <h2 mat-dialog-title>Registration Successful</h2>
    <mat-dialog-content>
      <p>Your registration was successful! Would you like to go to the home page?</p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button class="cancel-button" (click)="onCancel()">Cancel</button>
      <button mat-raised-button color="primary" class="confirm-button" (click)="onConfirm()">OK</button>
    </mat-dialog-actions>
  `,
  styleUrls: ['./register.component.css'] // Add a style file for the dialog
})
export class RegistrationSuccessDialogComponent {
  constructor(private dialogRef: MatDialogRef<RegistrationSuccessDialogComponent>) {}

  onConfirm() {
    this.dialogRef.close('confirm'); // Close dialog with confirmation
  }

  onCancel() {
    this.dialogRef.close(); // Close dialog without action
  }
}
