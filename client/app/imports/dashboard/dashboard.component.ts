import { Component, AfterContentInit, provide } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { NG2_UI_AUTH_PROVIDERS, JwtHttp } from 'ng2-ui-auth';
import { NavigationComponent } from './navigation/navigation.component';
import { MapComponent } from './map/map.component';
import { QuickviewComponent } from './quickview/quickview.component';
import { OverlayComponent } from './overlay/overlay.component';
import { HeaderComponent } from './header/header.component';

declare var $:any;

const DEFAULT_POST_HEADER: {[name: string]: string} = {
  'Content-Type': 'application/json'
};
const GOOGLE_CLIENT_ID = '642712098499-uqphekumjjgp2idhosahbdlvvs2g4i44.apps.googleusercontent.com';
@Component({
  selector: 'dashboard',
  templateUrl: './app/imports/dashboard/dashboard.component.html',
  directives: [
    NavigationComponent, MapComponent, QuickviewComponent,
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
