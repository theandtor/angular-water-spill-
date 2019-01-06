import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskAddComponent } from './componentes/task-add/task-add.component';
import { HomeComponent } from './routes/home/home.component';

import { TasksListComponent } from './componentes/tasks-list/tasks-list.component'
// import { ComposeMessageComponent }  from './compose-message/compose-message.component';
import { PageNotFoundComponent }    from './page-not-found/page-not-found.component';

// import { AuthGuard }                          from './auth/auth.guard';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

const appRoutes: Routes = [
    // {
    //     path: 'compose',
    //     component: TaskAddComponent,
    //     outlet: 'popup'
    // },
    // {
    //     path: 'list',
    //     component: TasksListComponent,
    //     outlet: 'popup'
    // },
    {
        path: 'home',
        component: HomeComponent,
        data: { title: 'Homey' }
      },
    {
        path: 'compose',
        component: TaskAddComponent,
        data: { title: 'Heroes List' }
      },
      {
        path: 'list',
        component: TasksListComponent,
        data: { title: 'Heroes List' }
      },
    // {
    //     path: 'admin',
    //     loadChildren: './admin/admin.module#AdminModule',
    //     canLoad: [AuthGuard]
    // },
    // {
    //     path: 'task-list',
    //     loadChildren: './crisis-center/crisis-center.module#CrisisCenterModule',
    //     data: { preload: true }
    // },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: false, // <-- debugging purposes only
                preloadingStrategy: SelectivePreloadingStrategyService,
            }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/