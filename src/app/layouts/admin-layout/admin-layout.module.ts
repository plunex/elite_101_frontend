import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';
// Components
import { DashboardComponent } from './../../dashboard/dashboard.component';
import { CreateEventComponent } from './../../create-event/create-event.component';
import { EventListComponent} from './../../event-list/event-list.component';
import { UsersComponent } from './../../users/users.component';
import { ChangePasswordComponent } from './../../change-password/change-password.component'

import { UpcomingEventsComponent } from '../../upcoming-events/upcoming-events.component';
import { AllEventsComponent } from '../../all-events/all-events.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatCardModule,
    MatIconModule,
    NgxPaginationModule
  ],
  declarations: [
    // Add components for views
    DashboardComponent,
    CreateEventComponent,
    EventListComponent,
    UsersComponent,
    ChangePasswordComponent,
    AllEventsComponent,
    UpcomingEventsComponent
  ]
})

export class AdminLayoutModule {}
