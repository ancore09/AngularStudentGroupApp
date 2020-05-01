import { Injectable } from '@angular/core';
import {WebsocketService} from '../websocket.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators';

export class Message {
  ID: number;
  body: string;
  memberData: MemberData;
  belongsToCurrentUser: boolean;
  fileHash: string;

  constructor(id: number, text: string, data: MemberData, btu: boolean) {
    this.ID = id;
    this.body = text;
    this.memberData = data;
    this.belongsToCurrentUser = btu;
  }
}

export class MemberData {
  nick: string;
  color: string;

  constructor(name: string, color: string) {
    this.nick = name;
    this.color = color;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public mesList: Message[] = [];
  messages: Subject<any>;

  constructor(private wsService: WebsocketService, private http: HttpClient) { }

  loadMessages() {
    this.http.get<any>(`${environment.ws_url}/getMessages`).subscribe(response => {
      this.mesList = response;
      console.log(response);
    });
    // establish a connection to websocket
    this.messages = this.wsService
      .connect() as Subject<any>;
    map((response: any): any => {
      console.log(response);
      return response;
    });
  }

  addMessage(msg) {
    this.mesList.push(msg);
  }

  sendMessage(msg) {
    this.messages.next(msg);
  }
}
