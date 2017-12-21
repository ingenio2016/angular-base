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
  message = '';
  constructor( private _chatService: ChatService ) {
    this._chatService.loadMessages()
      .subscribe(() => {
        setTimeout(() => {
          if (this.scrollElement.scrollHeight != undefined) {
            this.scrollElement.scrollTop = this.scrollElement.scrollHeight;
          }
        }, 20);
      });
  }

  ngOnInit() {
    this.scrollElement = document.getElementById('messages-list');
  }

  send_message() {
    if (this.message.length === 0) {
      return;
    }
    this._chatService.sendMessage( this.message )
      .then(() => {
        console.log('the message has sent');
        this.message = '';
      }).catch((err) => {
      console.error('Error. The message has not sent. Please Verify', err);
    });
  }

}
