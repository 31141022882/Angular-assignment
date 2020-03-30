import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { User } from '../user.model';
import { Subscription } from 'rxjs';
import { DataSharingService } from '../dataSharing.service';

@Component({
  selector: 'logIn',
  templateUrl: './logIn.component.html'
})
export class LogInComponent implements OnInit {
  loginForm: FormGroup;
  user: User;
  constructor(private fb: FormBuilder, private router: Router, private userDataSharing: DataSharingService) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: [
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
      ]
    });

  }

  get getUserName() {
    return this.loginForm.get("userName");
  }

   get getPassword() {
    
    return this.loginForm.get("password");
  }

  login() { 
    let userSubscription: Subscription = new Subscription();
    userSubscription = this.userDataSharing.userVM.subscribe(value => {
      this.user = value;
      userSubscription.unsubscribe();
    });
    if (this.loginForm.invalid || this.user.email != this.getUserName.value || this.user.password != this.getPassword.value ) {
      return;
    }
    this.router.navigate(["/home"]);
  }
}
 
