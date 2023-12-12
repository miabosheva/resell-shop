import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,  ValidationErrors, ValidatorFn, AbstractControl, FormBuilder } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../model/user';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  
  registerationForm: FormGroup;
  user : User | undefined;
  userSubmitted: boolean = false;

  constructor(private fb: FormBuilder, private userService: UserServiceService) {
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

  userData(): User {
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
      // console.log(this.registerationForm);
      this.user = Object.assign({}, this.registerationForm.value);
      this.userService.addUser(this.userData());
      this.registerationForm.reset();
      this.userSubmitted = false;
      alertify.success('User succesfully registered!');
    } else {
      alertify.error('Please type in the required fields.');
    }
  }
}