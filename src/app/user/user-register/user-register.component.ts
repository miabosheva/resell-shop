import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,  ValidationErrors, ValidatorFn, AbstractControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  
  registerationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerationForm = this.fb.group({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required]),
      phoneNumber: new FormControl(null, [Validators.required, Validators.maxLength(10)])
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

  onSubmit() {
    console.log(this.registerationForm);
  }
}