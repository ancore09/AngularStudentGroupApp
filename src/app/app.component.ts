import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {UserService} from './user/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router, private userService: UserService, private cookie: CookieService) { }

  isAuth() {
    return this.router.url === '/auth' || this.router.url === '/';
  }

  logOut() {
    this.cookie.deleteAll();
    this.userService.cookies = false;
    this.userService.user.Login = '';
    this.userService.user.NickName = '';
    this.userService.user.data = null;
    this.userService.isLogin = false;
    this.userService.isAdmin = false;
    this.router.navigate(['/']);
  }
}
