import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutes } from './tasks-routing.module';

import { RouterModule } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';


@NgModule({
  declarations: [TasksComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(TasksRoutes)
  ]
})
export class TasksModule { }
