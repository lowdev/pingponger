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

const GOOGLE_CLIENT_ID = '642712098499-uqphekumjjgp2idhosahbdlvvs2g4i44.apps.googleusercontent.com';
const FACEBOOK_CLIENT_ID = '217136761769180';
const DEFAULT_POST_HEADER: {[name: string]: string} = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
};

bootstrap(AppComponent, [
  provide(APP_BASE_HREF, {useValue : '/' }),
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  ANGULAR2_GOOGLE_MAPS_PROVIDERS,
  NG2_UI_AUTH_PROVIDERS({
    defaultHeaders: DEFAULT_POST_HEADER,
    providers: {
      facebook: {
        clientId: FACEBOOK_CLIENT_ID,
        url: 'http://localhost:8080/auth/facebook'
      },
    }
  })
]);
