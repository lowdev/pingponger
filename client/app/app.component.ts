import { Component, AfterContentInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { NG2_UI_AUTH_PROVIDERS, JwtHttp } from 'ng2-ui-auth';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { NavigationComponent } from './imports/navigation/navigation.component';
import { MapComponent } from './imports/map/map.component';
import { QuickviewComponent } from './imports/quickview/quickview.component';
import { OverlayComponent } from './imports/overlay/overlay.component';
import { HeaderComponent } from './imports/header/header.component';

declare var $:any;

const DEFAULT_POST_HEADER: {[name: string]: string} = {
  'Content-Type': 'application/json'
};
const GOOGLE_CLIENT_ID = '******************************.apps.googleusercontent.com';
@Component({
  selector: 'ping-ponger-app',
  templateUrl: './app/app.component.html',
  directives: [NavigationComponent, MapComponent, QuickviewComponent,
     OverlayComponent, HeaderComponent],
  providers: [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    NG2_UI_AUTH_PROVIDERS({defaultHeaders: DEFAULT_POST_HEADER, providers: {google: {clientId: GOOGLE_CLIENT_ID}}})]
})
export class AppComponent implements AfterContentInit {
  ngAfterContentInit() {
    $.Pages.init();
  }
}
