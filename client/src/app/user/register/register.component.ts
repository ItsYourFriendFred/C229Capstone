import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { UserRepository } from 'src/app/model/user.repository';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  newUser!: User;
  submitted = false;
  formSent = false;

  constructor(private repository: UserRepository, private router: Router) { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      passwordConfirm: new FormControl(''),  //TODO Custom validator to match password
    });
  }

  convertFormToUserModel(form: FormGroup): void {
    let firstName: string = this.registrationForm.controls['firstName'].value;
    let lastName: string = this.registrationForm.controls['lastName'].value;
    let username: string = this.registrationForm.controls['username'].value;
    let email: string = this.registrationForm.controls['email'].value;
    let password: string = this.registrationForm.controls['password'].value;
    let passwordConfirm: string =
      this.registrationForm.controls['passwordConfirm'].value;
    this.newUser = new User();
    this.newUser.firstName = firstName;
    this.newUser.lastName = lastName;
    this.newUser.username = username;
    this.newUser.password = password;
    this.newUser.DisplayName = firstName + ' ' + lastName;
    this.newUser.EmailAddress = email;

  }

  get firstName() { return this.registrationForm.get('firstName');}

  get lastName() { return this.registrationForm.get('lastName');}

  get email() { return this.registrationForm.get('email');}

  get username() { return this.registrationForm.get('username');}

  get passwordConfirm() { return this.registrationForm.get('passwordConfirm');}

  get password() { return this.registrationForm.get('password');}


  onSubmit(form: FormGroup): void {
    this.convertFormToUserModel(form);
    this.submitted = true;
    if (form.valid) {
      this.repository.registerUser(this.newUser).subscribe(form => {
        this.submitted = false;
        this.formSent = true;
        this.router.navigateByUrl('login');
      })
    }
  }

}
