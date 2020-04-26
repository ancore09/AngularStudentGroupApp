import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ChatService, MemberData, Message} from './chat.service';
import {UserService} from '../user/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  k = 0;

  constructor(private chatService: ChatService, private userService: UserService) { }

  ngOnInit() {
    this.chatService.loadMessages();
    this.subscription = this.chatService.messages.subscribe(msg => {
      this.chatService.addMessage(msg);
      // console.log(msg);
    });
  }

  sendMessage(msg, event) {
    event.preventDefault();
    const message = new Message(this.k, msg, new MemberData(this.userService.user.NickName, this.userService.user.data.color), true);
    this.chatService.sendMessage(message);
    this.k++;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
