import { RouterModule, Route } from '@angular/router';


import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { NofoundpageComponent } from './shared/nofoundpage/nofoundpage.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';








const appRoutes: Route = [

        {path: 'dashboard', component: DashboardComponent},
        {path: 'login', component: LoginComponent},
        {path: 'register', component: LoginComponent},
        {path: 'progress', component: ProgressComponent},
        {path: 'graficas1', component: Graficas1Component},
        {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
        {path: '**', component: NofoundpageComponent},

];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
