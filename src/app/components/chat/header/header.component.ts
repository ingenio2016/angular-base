import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ChatService } from '../../../providers/chat.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private sidebar: string = '';
  @Output() sidebarClass = new EventEmitter();
  constructor( private _chatService: ChatService ) {}

  ngOnInit() {
  }

  showList() {
    this.sidebar = this._chatService.SidebarTogle();
    this.sidebarClass.emit({value: this.sidebar});
  }

  logout() {
    this._chatService.logout();
  }
}
