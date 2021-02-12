import { Routes } from '@angular/router';

import { DashboardComponent } from './../../dashboard/dashboard.component';
import { CreateEventComponent } from './../../create-event/create-event.component';
import { EventListComponent} from './../../event-list/event-list.component';
import { UsersComponent } from './../../users/users.component';
import { ChangePasswordComponent } from './../../change-password/change-password.component'
import { UpcomingEventsComponent } from 'app/upcoming-events/upcoming-events.component';
import { AllEventsComponent } from 'app/all-events/all-events.component';
import { ToggleDarkComponent } from 'app/toggle-dark/toggle-dark.component';

export const AdminLayoutRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'create-event',
        component: CreateEventComponent
    },
    {
        path: 'events',
        component: EventListComponent,
        children: [
            {
                path: '',
                component: AllEventsComponent
            },
            {
                path: 'upcoming',
                component: UpcomingEventsComponent
            }
        ],
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'toggle-dark',
        component: ToggleDarkComponent
    }
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
];
