import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {UserService} from '../user/user.service';

export class New {
  ID: number;
  title: string;
  body: string;
  epilogue: string;
  filehash: string;
  datedmy: string;
  showing: boolean;

  constructor(ID: number, title: string, body: string, epilogue: string, filehash: string, datedmy: string) {
    this.ID = ID;
    this.title = title;
    this.body = body;
    this.epilogue = epilogue;
    this.filehash = filehash;
    this.datedmy = datedmy;
  }
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public newsList: New[] = [];

  constructor(private http: HttpClient, private user: UserService) { }

  loadNews() {
    this.http.get<any>(`${environment.ws_url}/getNews?groupid=1&groupid=2`).subscribe(response => {
      console.log(response);
      this.newsList = response;
    });
  }
}
