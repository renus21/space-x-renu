import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaceXDataComponent } from './components/space-x-data/space-x-data.component';
import { HttpClientModule } from '@angular/common/http';
import { SpaceXCardComponent } from './components/space-x-card/space-x-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SpaceXDataComponent,
    SpaceXCardComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
