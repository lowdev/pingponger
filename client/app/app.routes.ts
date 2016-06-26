import { provideRouter, RouterConfig } from '@angular/router'; 
import { LoginComponent } from './imports/login/login.component';

export const routes: RouterConfig = [
  { path: 'login', component: LoginComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
