import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  constructor( private _cs: ChatService ) {}
  ngOnInit() {
    this._cs.loadChatUser(this._cs.users[0]);
  }


}
