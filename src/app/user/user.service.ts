import { Injectable } from '@angular/core';
import {MemberData} from '../chat/chat.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

export class User {
  private _ID: number;
  private _Login: string;
  private _FirstName: string;
  private _LastName: string;
  private _NickName: string;
  private _memberdata_ID: number;
  private _data: MemberData;


  get ID(): number {
    return this._ID;
  }

  set ID(value: number) {
    this._ID = value;
  }

  get Login(): string {
    return this._Login;
  }

  set Login(value: string) {
    this._Login = value;
  }

  get FirstName(): string {
    return this._FirstName;
  }

  set FirstName(value: string) {
    this._FirstName = value;
  }

  get LastName(): string {
    return this._LastName;
  }

  set LastName(value: string) {
    this._LastName = value;
  }

  get NickName(): string {
    return this._NickName;
  }

  set NickName(value: string) {
    this._NickName = value;
  }

  get memberdata_ID(): number {
    return this._memberdata_ID;
  }

  set memberdata_ID(value: number) {
    this._memberdata_ID = value;
  }

  get data(): MemberData {
    return this._data;
  }

  set data(value: MemberData) {
    this._data = value;
  }
}

export class Group {
  private _ID: number;
  private _NameInfo: string;


  get ID(): number {
    return this._ID;
  }

  set ID(value: number) {
    this._ID = value;
  }

  get NameInfo(): string {
    return this._NameInfo;
  }

  set NameInfo(value: string) {
    this._NameInfo = value;
  }
}

export class Grouping {
  private _ID: number;
  private _Group_ID: number;
  private _User_ID: number;


  get ID(): number {
    return this._ID;
  }

  set ID(value: number) {
    this._ID = value;
  }

  get Group_ID(): number {
    return this._Group_ID;
  }

  set Group_ID(value: number) {
    this._Group_ID = value;
  }

  get User_ID(): number {
    return this._User_ID;
  }

  set User_ID(value: number) {
    this._User_ID = value;
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  groupings: Grouping[];
  groups: Group[];
  cookies: boolean;
  isLogin: boolean;
  isAdmin: boolean;

  constructor(private httpClient: HttpClient) { }

  authUser(login: string, hash: string, func) {
    this.httpClient.get<User>(`${environment.ws_url}/auth?login=${login}&passwordhash=${hash}`).subscribe(response => {
      if (response != null) {
        this.user = response;
        console.log(response);

        this.httpClient.get<MemberData>(`${environment.ws_url}/getMemberData?id=${this.user.memberdata_ID}`).subscribe(response => {
          this.user.data = response;
          console.log(response);

          this.httpClient.get<Grouping[]>(`${environment.ws_url}/getGrouping?userid=${this.user.ID}`).subscribe(response => {
            const ids = [];
            for (let i = 0; i < response.length; i++) {
              ids.push(response[i].Group_ID);
            }
            this.groupings = response;
            console.log(response);

            let url = `${environment.ws_url}/getGroup?`;
            for (let i = 0; i < ids.length; i++) {
              url += `id=${ids[i]}`;
              if (i != ids.length - 1) {
                url += '&';
              }
            }

            this.httpClient.get<Group[]>(url).subscribe(response => {
              this.groups = response;
              console.log(response);
              func();
            });
          });
        });
      }
    });
  }

}
