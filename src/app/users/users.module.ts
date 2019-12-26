import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutes } from './users-routing.module';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule, Actions } from '@ngrx/effects';
import { userReducer } from "./state/users.reducer"
import { UsersEffects} from './state/users.effects';
import { UserModalComponent } from './components/user-modal/user-modal.component'


@NgModule({
  declarations: [UsersComponent, UserCardComponent, UserModalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
    StoreModule.forFeature("users",userReducer),
    EffectsModule.forFeature([UsersEffects])
  ],
  exports:[UserModalComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class UsersModule { }
