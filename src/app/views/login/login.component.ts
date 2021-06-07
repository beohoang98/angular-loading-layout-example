import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    submitting = false;

    constructor(
        private readonly authService: AuthService,
    ) { }

    ngOnInit() {
        this.authService.state.subscribe((state) => {
            switch (state.state) {
                case "loading":
                    this.submitting = true;
                    break;
                default:
                    this.submitting = false;
                    break;
            }
        });
    }

    public login(ev: Event) {
        ev.preventDefault();
        this.authService.login(null);
    }
}
