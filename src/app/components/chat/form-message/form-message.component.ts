import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../providers/chat.service';

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  styleUrls: ['./form-message.component.scss']
})
export class FormMessageComponent implements OnInit {
  message = '';
  constructor( private _chatService: ChatService ) { }

  ngOnInit() {
  }

  send_message(receiver: string) {
    if (this.message.length === 0) {
      return;
    }
    this._chatService.sendMessage( this.message, receiver )
      .then(() => {
        console.log('the message has sent');
        this.message = '';
      }).catch((err) => {
      console.error('Error. The message has not sent. Please Verify', err);
    });
  }
}
