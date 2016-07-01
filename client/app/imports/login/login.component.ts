import { Component, AfterContentInit, ElementRef, Renderer } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { FormBuilder, ControlGroup, Validators } from '@angular/common';
import { Auth } from 'ng2-ui-auth';

@Component({
    selector: 'login',
    templateUrl: 'app/imports/login/login.component.html',
    styleUrls: ['app/imports/login/login.component.css']
})
export class LoginComponent implements AfterContentInit {
    form: ControlGroup;
    user = { email: '', password: '' };
    userControlsConfig = {
        email: ['', Validators.compose([Validators.required])],
        password: ['', Validators.required],
    };
    login() {
        this.auth.login(this.user)
            .subscribe(
                () => this.goToMain()
            );
    }
    authenticate(provider: string) {
        this.auth.authenticate(provider)
            .subscribe(
                () => this.goToMain()
            );
    }
    goToMain() {
        this.router.navigate(['Main']);
    }
    ngAfterContentInit() {
        this.renderer.setElementClass(this.element, 'app', true);
        if (this.auth.isAuthenticated()) {
            this.goToMain();
        }
    }
    constructor(private auth: Auth,
                private fb: FormBuilder,
                private router: Router,
                private element: ElementRef,
                private renderer: Renderer) {
        this.form = fb.group(this.userControlsConfig);
    }
}
