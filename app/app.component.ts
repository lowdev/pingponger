import { Component, AfterContentInit } from '@angular/core';
import { NavigationComponent } from './imports/navigation/navigation.component';
import { MapComponent } from './imports/map/map.component';
import { QuickviewComponent } from './imports/quickview/quickview.component';
import { OverlayComponent } from './imports/overlay/overlay.component';

declare var $:any;

@Component({
  selector: 'ping-ponger-app',
  templateUrl: './app/app.component.html',
  directives: [NavigationComponent, MapComponent, QuickviewComponent, OverlayComponent]
})
export class AppComponent implements AfterContentInit {
  ngAfterContentInit() {
    $.Pages.init();
  }
}
