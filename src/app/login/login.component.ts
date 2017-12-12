import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import '../../assets/css/styles.css';

@Component({
  selector: 'login-page',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {

    form: FormGroup;

    private formSubmitAttempt: boolean;

    constructor(
      private fb: FormBuilder,
      // TODO: uncomment when loginService is ready
      //private loginService: LoginService
    ) {}

    ngOnInit() {
      this.form = this.fb.group({
        userName: ['', Validators.required],
        password: ['', Validators.required]
      });
    }

    isFieldInvalid(field: string) {
      return (
        (!this.form.get(field).valid && this.form.get(field).touched) ||
        (this.form.get(field).untouched && this.formSubmitAttempt)
      );
    }

    onSubmit() {
      if (this.form.valid) {
        // TODO: uncomment when loginService is ready
        //this.loginService.login(this.form.value);
      }
      this.formSubmitAttempt = true;
    }
}
