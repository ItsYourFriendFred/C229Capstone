import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { UserRepository } from 'src/app/model/user.repository';

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

  constructor(private repository: UserRepository) { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      passwordConfirm: new FormControl(''),
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
    this.newUser.username = username;
    this.newUser.password = password;
    this.newUser.DisplayName = firstName + lastName;
    this.newUser.EmailAddress = email;

  }



  onSubmit(form: FormGroup): void {
    this.convertFormToUserModel(form);
    this.submitted = true;
    if (form.valid) {
      this.repository.registerUser(this.newUser).subscribe(form => {
        this.submitted = false;
        this.formSent = true;
      })
    }
  }

}
