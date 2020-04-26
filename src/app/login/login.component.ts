import { Component, OnInit } from '@angular/core';
import {UserService} from '../user/user.service';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: string;
  password: string;

  constructor(private userService: UserService, private router: Router, private cookie: CookieService) { }

  ngOnInit() {
  }

  auth() {
    // this.router.navigate(['/news']);
    this.userService.authUser(this.login, this.password, () => {
      this.router.navigate(['/news']);
    });
  }

}
