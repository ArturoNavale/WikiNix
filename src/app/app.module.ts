import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WikipediaComponent } from './components/wikipedia/wikipedia.component';

@NgModule({
  declarations: [
    AppComponent,
    WikipediaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
