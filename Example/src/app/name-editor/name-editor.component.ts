import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {
  profileForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      password: [
        ''
      ],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      })
    });
  }

  getFirstName() {
    return this.profileForm.get('firstName').value;
  }

  get getPassword() {
    return this.profileForm.get("password");
  }

  login() {
    console.log("asdfasdf");
    this.authService.isLoggedIn = this.getPassword.value === "huyenhuyen";
    if (this.authService.callBackUrl) {
      this.router.navigate([this.authService.callBackUrl])
    } else {
      console.log("default");
    }
    return true;
  }
}
