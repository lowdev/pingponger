import { provide } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { NG2_UI_AUTH_PROVIDERS, JwtHttp } from 'ng2-ui-auth';

import { APP_ROUTER_PROVIDERS } from './app.routes';
import { AppComponent } from './app.component';
import {
  ANGULAR2_GOOGLE_MAPS_PROVIDERS
} from 'angular2-google-maps/core';

const FACEBOOK_CLIENT_ID = '******************************.apps.googleusercontent.com';

bootstrap(AppComponent, [
  provide(APP_BASE_HREF, {useValue : '/' }),
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  ANGULAR2_GOOGLE_MAPS_PROVIDERS,
  NG2_UI_AUTH_PROVIDERS({providers: {facebook: {clientId: FACEBOOK_CLIENT_ID}}})
]);
