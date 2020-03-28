import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {
  profileForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(8)]],
      lastName: [''],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
        ]
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
    if (this.profileForm.invalid) {
      console.log("Form is invalid");
      return;
    }

    console.log("LOGGED IN SUCCESSFUL");
  }
}
