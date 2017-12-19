import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _cs:ChatService) { }

  ngOnInit() {
  }

  login(provider:string){
    this._cs.login(provider);
  }
}
