import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../providers/chat.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  // Var declarations

  scrollElement: any;
  constructor( private _chatService: ChatService ) {}

  ngOnInit() {
    this.scrollElement = document.getElementById('messages-list');
  }

}
