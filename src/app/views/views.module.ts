import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { NotFoundComponent } from "./not-found/not-found.component";

@NgModule({
    declarations: [HomeComponent, LoginComponent, NotFoundComponent],
    imports: [CommonModule, FormsModule],
})
export class ViewsModule {}
