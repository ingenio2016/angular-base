import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  message:string = "";
  element:any;
  constructor( private _cs:ChatService ) {
    this._cs.loadMessages()
           .subscribe(()=>{
             setTimeout(()=>{
               if(this.element.scrollHeight != undefined){
                 this.element.scrollTop = this.element.scrollHeight;
               }
             },20)
           });
  }

  ngOnInit() {
    this.element = document.getElementById('messages-list');
  }

  send_message() {
    if(this.message.length == 0){
      return;
    }
    this._cs.sendMessage(this.message)
            .then(()=>{
              console.log("the message has sent");
              this.message = "";
            }).catch((err)=>{
              console.error("Error. The message hasn't sent. Plase Verify", err)
            })
  }

  logout(){
    this._cs.logout();
  }

}
