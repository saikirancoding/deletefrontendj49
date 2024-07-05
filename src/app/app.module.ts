import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PropertybindingComponent } from './components/propertybinding/propertybinding.component';
import { EventbindingComponent } from './components/eventbinding/eventbinding.component';
import { TwowaybingingComponent } from './components/twowaybinging/twowaybinging.component';
import { FormsModule } from '@angular/forms';
import { NgforComponent } from './components/ngfor/ngfor.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertybindingComponent,
    EventbindingComponent,
    TwowaybingingComponent,
    NgforComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
