import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, AuthState } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
    public loaded = false;
    public logged = false;
    public sidebarOpen = true;

    constructor(
        private readonly authService: AuthService,
        private readonly router: Router,
    ) { }

    ngOnInit() {
        this.authService.state.subscribe(this.onAuthStateChange.bind(this));
        this.authService.fetch();
    }

    onAuthStateChange(state: AuthState) {
        switch (state.state) {
            case "loading":
                this.loaded = false;
                break;
            case "logged":
                this.loaded = true;
                this.logged = true;
                break;
            case "not-logged":
                this.router.navigateByUrl("/auth");
                break;
            case "error":
                this.loaded = true;
                this.logged = false;
                break;
        }
    }
}
