import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/models/interfaces/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;

  loading = false;

  showPassword = false;

  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {

    this.registerForm = this.fb.group({

      firstName: ['', Validators.required],

      lastName: ['', Validators.required],

      username: ['', Validators.required],

      email: ['', [Validators.required, Validators.email]],

      phoneNo: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]{10}$')
        ]
      ],

      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ]

    });

  }



  togglePassword(): void {

    this.showPassword = !this.showPassword;

  }



  onRegister(): void {

    console.log("Before validation");

if (this.registerForm.invalid) {

  Object.keys(this.registerForm.controls).forEach(key => {

    const control = this.registerForm.get(key);

    console.log(
      key,
      control?.value,
      control?.valid,
      control?.errors
    );

  });

  return;
}

console.log("After validation");

const user: User = {
  ...this.registerForm.value,
  userId: 0,
  isLoggedIn: false
};

console.log("Before service call");

this.userService.createUserObject(user).subscribe({
  next: (user: User) => {

  console.log("SUCCESS", user);

  localStorage.setItem('loggedInUser', JSON.stringify(user));

  console.log("Stored in localStorage");

  alert("Account created successfully.");

  console.log("Navigating...");

  this.router.navigate(['/app/dashboard']);

},
  error: err => console.log("ERROR", err)
});

console.log("After service call");
  }}
