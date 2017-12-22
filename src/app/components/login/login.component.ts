import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private _cs: ChatService, private _router: Router) { }

  ngOnInit() {
  }

  login(provider: string) {
    this._cs.login(provider).then((userLogin) => {
      this._router.navigate( ['chat'] );
      this.registerUser(userLogin.user);
      // Load First User Chat
      this._cs.loadChatUser(this._cs.users[0]);
    });
  }

  registerUser(user: any) {
    this._cs.registerUser(user);
  }
}
