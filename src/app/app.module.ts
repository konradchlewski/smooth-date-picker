import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SmoothDatePickerModule } from './modules/smooth-date-picker/smooth-date-picker.module';
import { SmoothDatePickerComponent } from './modules/smooth-date-picker/smooth-date-picker.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SmoothDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
