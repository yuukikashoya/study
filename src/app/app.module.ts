import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavListComponent } from './nav-list/nav-list.component';

import { AppRoutingModule, routingComponests} from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    NavListComponent,
routingComponests,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule // CLI adds AppRoutingModule to the AppModule's imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
