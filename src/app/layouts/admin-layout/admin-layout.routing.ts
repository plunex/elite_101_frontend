import { Routes } from '@angular/router';

import { DashboardComponent } from './../../dashboard/dashboard.component';
import { CreateEventComponent } from './../../create-event/create-event.component';
import { EventListComponent} from './../../event-list/event-list.component';
import { UsersComponent } from './../../users/users.component';
import { ChangePasswordComponent } from './../../change-password/change-password.component'

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
        component: EventListComponent
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'change-password',
        component: ChangePasswordComponent
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
