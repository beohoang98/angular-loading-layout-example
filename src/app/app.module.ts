import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LayoutsModule } from "./layouts/layouts.module";
import { ViewsModule } from "./views/views.module";

@NgModule({
    declarations: [AppComponent],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        LayoutsModule,
        ViewsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
