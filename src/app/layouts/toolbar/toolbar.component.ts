import { Component } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";

@Component({
    selector: "app-toolbar",
    templateUrl: "./toolbar.component.html",
    styleUrls: ["./toolbar.component.scss"],
})
export class ToolbarComponent {
    constructor(private readonly authService: AuthService) {}

    logout() {
        this.authService.logout();
    }
}
