import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServerLocalComponent } from './server-local/server-local.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServerLocalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
