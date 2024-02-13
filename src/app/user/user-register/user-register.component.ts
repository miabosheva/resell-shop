import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,  ValidationErrors, ValidatorFn, AbstractControl, FormBuilder } from '@angular/forms';

import { UserForRegister } from '../../model/user';
import * as alertify from 'alertifyjs';
import { AlertifyService } from '../../services/alertify.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerationForm: FormGroup;
  user : UserForRegister | undefined;
  userSubmitted: boolean = false;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private alertify: AlertifyService) {
    this.registerationForm = this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required, Validators.maxLength(10)]]
    }, { validators: this.passwordMatchingValidator })
  }

  ngOnInit() {
  }

  passwordMatchingValidator: ValidatorFn = (fg: AbstractControl): ValidationErrors | null => {
    if (fg instanceof FormGroup) {
      return fg.get('password')?.value === fg.get('confirmPassword')?.value ? null : { notmatched: true };
    }
    return null;
  };

  // ------------------------------------
  // Getter methods for all form controls
  // ------------------------------------
  get userName() {
    return this.registerationForm.get('userName') as FormControl;
  }

  get email() {
    return this.registerationForm.get('email') as FormControl;
  }
  get password() {
    return this.registerationForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registerationForm.get('confirmPassword') as FormControl;
  }
  get phoneNumber() {
    return this.registerationForm.get('phoneNumber') as FormControl;
  }
  // ------------------------

  userData(): UserForRegister {
    return this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      phoneNumber: this.phoneNumber.value
    }
  }

  onSubmit() {
    this.userSubmitted = true;
    if (this.registerationForm.valid){
      // this.user = Object.assign({}, this.registerationForm.value);
      this.authService.registerUser(this.userData()).subscribe(() =>
        {
          this.onReset();
          this.alertify.success('Register is successful.')
        }, error => {
          console.log(error);
          this.alertify.error(error.error);
        }
      );
    } else {
      this.alertify.error('Please type in the required fields.');
    }
  }

  private onReset() {
    this.registerationForm.reset();
    this.userSubmitted = false;
  }
}
