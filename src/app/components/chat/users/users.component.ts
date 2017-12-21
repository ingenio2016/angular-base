import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../providers/chat.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor( private _chatService: ChatService ) { }

  ngOnInit() {
  }

}
