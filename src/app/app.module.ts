import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {DesignSystemModule} from 'design-system-royer-adames-com'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DesignSystemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
