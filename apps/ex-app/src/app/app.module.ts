import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { AppRoutesModule } from "./app.routes";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    AppRoutesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
