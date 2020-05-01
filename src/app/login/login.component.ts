import { Component, OnInit } from '@angular/core';
import {UserService} from '../user/user.service';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: string;
  password: string;

  constructor(private userService: UserService, private router: Router, private cookie: CookieService) { }

  ngOnInit() {
  }

  auth() {
    this.userService.authUser(this.login, this.password, () => {
      const exiperedate = new Date();
      exiperedate.setDate(exiperedate.getDate() + 2);
      this.cookie.set('login', this.login, exiperedate);
      this.cookie.set('passhash', this.password, exiperedate);
      this.router.navigate(['/news']);
    });
  }

}
