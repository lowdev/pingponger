import { Component } from '@angular/core';
import { UserInfoComponent } from './user-info/userInfo.component';

@Component ({
    selector: 'header',
    templateUrl: 'app/imports/dashboard/header/header.component.html',
    directives : [UserInfoComponent]
})
export class HeaderComponent {}
