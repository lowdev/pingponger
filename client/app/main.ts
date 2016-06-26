import { bootstrap }    from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {NG2_UI_AUTH_PROVIDERS, JwtHttp} from 'ng2-ui-auth';

import { AppComponent } from './app.component';
import {
  ANGULAR2_GOOGLE_MAPS_PROVIDERS
} from 'angular2-google-maps/core';

const FACEBOOK_CLIENT_ID = '******************************.apps.googleusercontent.com';

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ANGULAR2_GOOGLE_MAPS_PROVIDERS,
  NG2_UI_AUTH_PROVIDERS({providers: {facebook: {clientId: FACEBOOK_CLIENT_ID}}})
]);
