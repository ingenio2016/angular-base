import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../providers/chat.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  private users: any[] = [];
  constructor( private _chatService: ChatService ) {
    this._chatService.loadUsers()
      .subscribe((users) => {
        this.users = users;
      });
  }

  ngOnInit() {
  }

  loadChat(user: any) {
    if (!user) {
      return;
    }
    this._chatService.loadChatUser(user);

    // Load Chat Conversation
    this._chatService.loadMessages()
      .subscribe(() => {
        /*setTimeout(() => {
          if (this.scrollElement.scrollHeight != undefined) {
            this.scrollElement.scrollTop = this.scrollElement.scrollHeight;
          }
        }, 20);*/
      });
  }
}
