import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WikipediaComponent } from './components/wikipedia/wikipedia.component';
import { BodyComponent } from './components/body/body.component';
import { InfoboxComponent } from './components/infobox/infobox.component';

@NgModule({
  declarations: [
    AppComponent,
    WikipediaComponent,
    BodyComponent,
    InfoboxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
