import { Component, AfterContentInit, provide } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { NG2_UI_AUTH_PROVIDERS, JwtHttp } from 'ng2-ui-auth';
import { LoginComponent } from '../../imports/login/login.component';
import { NavigationComponent } from '../../imports/navigation/navigation.component';
import { MapComponent } from '../../imports/map/map.component';
import { QuickviewComponent } from '../../imports/quickview/quickview.component';
import { OverlayComponent } from '../../imports/overlay/overlay.component';
import { HeaderComponent } from '../../imports/header/header.component';

declare var $:any;

const DEFAULT_POST_HEADER: {[name: string]: string} = {
  'Content-Type': 'application/json'
};
const GOOGLE_CLIENT_ID = '******************************.apps.googleusercontent.com';
@Component({
  selector: 'dashboard',
  templateUrl: './app/imports/dashboard/dashboard.component.html',
  directives: [
    LoginComponent, NavigationComponent, MapComponent, QuickviewComponent,
    OverlayComponent, HeaderComponent ],
  providers: [
    HTTP_PROVIDERS,
    NG2_UI_AUTH_PROVIDERS({defaultHeaders: DEFAULT_POST_HEADER, providers: {google: {clientId: GOOGLE_CLIENT_ID}}})]
})
export class DashBoardComponent implements AfterContentInit {
  ngAfterContentInit() {
    $.Pages.init();
  }
}
