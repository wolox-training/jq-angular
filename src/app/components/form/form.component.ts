import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { validatePassword } from '../../../validators/singup.validators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signUpForm = fb.group({
      'first_name': [null, Validators.required],
      'last_name': [null, Validators.required],
      'email': [null, Validators.compose([Validators.email, Validators.required])],
      'password': [null, Validators.compose([Validators.required, Validators.pattern(environment.regexPassword)])],
      'password_confirmation': [null, Validators.required]
    }, { validator: validatePassword });
  }

  signUp(data) {
    const user = {
      user: {
        ...data,
        'locale': 'en'
      }
    };
    console.log(user);
  }

}
