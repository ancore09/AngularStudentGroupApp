import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import * as Rx from 'rxjs';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket;
  private observable;
  private observer;

  constructor() { }

  connect(): Rx.Subject<MessageEvent> {
    console.log('connect');
    this.socket = io(`${environment.ws_url}?room=c`);

    // tslint:disable-next-line:no-shadowed-variable
    this.observable = new Observable(observer => {
      this.socket.on('message', (data) => {
        // console.log('Mes received!');
        console.log(data);
        let parsed = data;
        try {
          parsed = JSON.parse(data);
        } catch (e) {
          console.log(e);
        }
        observer.next(parsed);
      });
      return () => {
        // this.socket.emit('leave');
        this.socket.disconnect();
      };
    });

    this.observer = {
      next: (data: Object, room: string) => {
        this.socket.emit('message', {mes: data, room: 'c'} /*, this.user.user.course*/);
        console.log(data);
      }
    };

    return Rx.Subject.create(this.observer, this.observable);
  }
}
