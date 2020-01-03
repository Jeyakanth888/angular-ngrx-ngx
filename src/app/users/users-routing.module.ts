import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';


export const UserRoutes: Routes = [{
  path: '',
  component: UsersComponent,
  children:[ {
    path:'user',
    component: UserComponent
  }
   

  ]
}];

