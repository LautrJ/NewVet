import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";

@NgModule({
    imports: [BrowserModule ],
    declarations: 
    [ 
        AppComponent,
        SharedModule
     ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}