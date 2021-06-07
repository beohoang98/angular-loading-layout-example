import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

export type AuthState =
    | {
          state: "loading" | "not-logged";
      }
    | {
          state: "logged";
          profile: any;
      }
    | {
          state: "error";
          error: Error;
      };

@Injectable({
    providedIn: "root",
})
export class AuthService {
    public readonly state = new Subject<AuthState>();

    constructor(private readonly router: Router) {
        this.state.subscribe(this.logging.bind(this));
    }

    public logging(state: AuthState) {
        console.log(state);
    }

    public async fetch() {
        this.state.next({ state: "loading" });
        setTimeout(() => {
            if (!!localStorage.getItem("logged")) {
                this.state.next({
                    state: "logged",
                    profile: {
                        email: "test",
                        name: "test",
                    },
                });
                this.router.navigateByUrl("/");
            } else {
                this.state.next({
                    state: "not-logged",
                });
                this.router.navigateByUrl("/auth");
            }
        }, 2000);
    }

    public async login(loginParams: any) {
        this.state.next({ state: "loading" });
        setTimeout(() => {
            localStorage.setItem("logged", "true");
            this.fetch();
        }, 2000);
    }

    public async logout() {
        localStorage.removeItem("logged");
        this.fetch();
    }
}
