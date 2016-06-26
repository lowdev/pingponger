import { Component, AfterContentInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { NG2_UI_AUTH_PROVIDERS, JwtHttp } from 'ng2-ui-auth';

declare var $:any;

const DEFAULT_POST_HEADER: {[name: string]: string} = {
  'Content-Type': 'application/json'
};
const GOOGLE_CLIENT_ID = '******************************.apps.googleusercontent.com';
@Component({
  selector: 'ping-ponger',
  template: '<router-outlet></router-outlet>',
  directives: [ ROUTER_DIRECTIVES ],
  providers: [
    HTTP_PROVIDERS,
    NG2_UI_AUTH_PROVIDERS({defaultHeaders: DEFAULT_POST_HEADER, providers: {google: {clientId: GOOGLE_CLIENT_ID}}})]
})
export class AppComponent implements AfterContentInit {
  ngAfterContentInit() {
    $.Pages.init();
  }
}
