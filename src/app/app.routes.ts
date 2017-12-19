import { RouterModule, Routes } from '@angular/router';
//Importo los componentes para las rutas
import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent} from './components/users/users.component';

const APP_ROUTES:Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'users', component : UsersComponent},
  { path: 'chat', component : ChatComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'login'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });
