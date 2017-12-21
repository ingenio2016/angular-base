import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent} from './components/chat/users/users.component';

const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'chat', component : ChatComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'login'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });
