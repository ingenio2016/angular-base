import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  private sidebarActive: string = '';
  constructor( private _cs: ChatService ) {}
  ngOnInit() {
    this._cs.loadChatUser(this._cs.users[0]);
  }

  SidebarTocgle() {
    if (this.sidebarActive === '') {
      this.sidebarActive = 'active';
    }else {
      this.sidebarActive = '';
    }
    console.log(this.sidebarActive);
  }
}
