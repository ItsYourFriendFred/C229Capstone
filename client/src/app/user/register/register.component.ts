import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserRepository } from 'src/app/model/user.repository';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  formSent = false;

  constructor(private repository: UserRepository) { }

  ngOnInit(): void {
  }

  onSubmit(form: FormGroup): void {
    this.submitted = true;
    if (form.valid) {
      this.repository.registerUser(form.value).subscribe(form => {
        this.submitted = false;
        this.formSent = true;
      })
    }
  }

}
