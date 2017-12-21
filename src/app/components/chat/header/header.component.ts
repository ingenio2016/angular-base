import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../providers/chat.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor( private _chatService: ChatService ) {}

  ngOnInit() {
  }

  logout(user: any) {
    this._chatService.logout(user);
  }
}
