import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component ({
    selector: 'user-info',
    templateUrl: '/app/imports/header/user-info/user-info.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class UserInfoComponent {}
