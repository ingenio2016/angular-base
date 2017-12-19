import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _cs:ChatService, private _router:Router) { }

  ngOnInit() {
  }

  login(provider:string){
    this._cs.login(provider).then(()=>{
      //inicialmente redireccionara a chats pero realmente sera a users
      this._router.navigate( ['chat'] );
    });
  }
}
