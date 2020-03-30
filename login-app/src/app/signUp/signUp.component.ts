import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { User } from '../user.model';
import { DataSharingService } from '../dataSharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'signUp',
  templateUrl: './signUp.component.html'
})
export class SignUpComponent implements OnInit {
  profileForm: FormGroup;
  constructor(private fb: FormBuilder, private userDataSharing: DataSharingService, private router:Router) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$')
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
        ]
      ],
      confirmedPassword: [
        '',
        [
          Validators.required,
          Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
        ]
      ]
    });
  }

  get getFirstName() {
    return this.profileForm.get("firstName");
  }
  get getLastName() {
    return this.profileForm.get("lastName");
  }
  get getEmail() {
    return this.profileForm.get("email");
  }
  get getPassword() {
    return this.profileForm.get("password");
  }
  get getConfirmedPassword() {
    return this.profileForm.get("confirmedPassword");
  }

  signUp() {
    if (this.profileForm.invalid) {
      console.log("Form is invalid");
      return;
    }
    let user = new User();
    user.firstName = this.profileForm.get("firstName").value;
    user.lastName = this.profileForm.get("lastName").value;
    user.email = this.profileForm.get("email").value;
    user.password = this.profileForm.get("password").value;
    this.userDataSharing.userVM.next(user);
    this.router.navigate(["/login"]);
  }
}
