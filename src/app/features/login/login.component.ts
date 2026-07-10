import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/models/interfaces/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  loading = false;

  showPassword = false;

  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {

    this.loginForm = this.fb.group({

      username: ['', Validators.required],

      password: ['', Validators.required]

    });

  }

  togglePassword(): void {

    this.showPassword = !this.showPassword;

  }

  onLogin(): void {

    this.errorMessage = '';

    if (this.loginForm.invalid) {

      this.loginForm.markAllAsTouched();

      return;

    }

    this.loading = true;

    const username = this.loginForm.value.username;

    const password = this.loginForm.value.password;

    this.userService.loginUserObject(username, password).subscribe({

      next: (user: User) => {

        this.loading = false;

        // Save logged in user
        localStorage.setItem(
          'loggedInUser',
          JSON.stringify(user)
        );

        this.router.navigate(['/app/dashboard']);

      },

      error: (error) => {

        this.loading = false;

        if (error.error?.message) {

          this.errorMessage = error.error.message;

        }

        else {

          this.errorMessage =
            'Invalid username or password';

        }

      }

    });

  }

}