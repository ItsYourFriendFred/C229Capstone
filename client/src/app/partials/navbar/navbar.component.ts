import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user!: User | null;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.user = new User();
  }

  onLogOutClick(): void {
    this.authService.logOut().subscribe(data => {
      this.router.navigateByUrl('/login');
    })
  }

  isLoggedIn(): boolean {
    const result = this.authService.authenticated;
    if (result) {
      this.user = JSON.parse(localStorage.getItem('user')!);
    }
    return result;
  }

}
