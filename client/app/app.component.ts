import { Component, AfterContentInit } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

declare var $:any;

const DEFAULT_POST_HEADER: {[name: string]: string} = {
  'Content-Type': 'application/json'
};

@Component({
  selector: 'ping-ponger',
  template: '<router-outlet></router-outlet>',
  directives: [ ROUTER_DIRECTIVES ]
})
export class AppComponent implements AfterContentInit {
  ngAfterContentInit() {
    $.Pages.init();
  }
}
