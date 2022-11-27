import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';

import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  public user!: User;
  public errorMessage?: string;

  constructor(private router: Router,
    private auth: AuthService) {}

  ngOnInit(): void {
    this.user = new User();
  }

  authenticate(form: NgForm): void {
    if (form.valid) {
      this.auth.authenticate(this.user).subscribe(data => {
        if (data.success) {
          this.auth.storeUserData(data.token, data.user);
          this.router.navigateByUrl('user/main');  //TODO Change to an actual main user page after logging in
        }
      });
    } else {
      this.errorMessage = 'Username or Password is incorrect!';
    }
  }
}
