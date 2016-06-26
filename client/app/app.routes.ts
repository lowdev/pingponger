import { provideRouter, RouterConfig } from '@angular/router';
import { LoginComponent } from './imports/login/login.component';
import { DashBoardComponent } from './imports/dashboard/dashboard.component';

export const routes: RouterConfig = [
  { path: '', redirectTo: 'dashboard' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashBoardComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
