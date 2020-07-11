import { NgModule } from '@angular/core';
import { SmoothDatePickerComponent } from './smooth-date-picker.component';
import { SmoothMonthPickerComponent } from './components/smooth-month-picker/smooth-month-picker.component';
import { SmoothDayPickerComponent } from './components/smooth-day-picker/smooth-day-picker.component';
import { SmoothYearPickerComponent } from './components/smooth-year-picker/smooth-year-picker.component';

@NgModule({
  declarations: [SmoothDatePickerComponent, SmoothMonthPickerComponent, SmoothDayPickerComponent, SmoothYearPickerComponent], 
  imports: [
  ],
  exports: [
    SmoothDatePickerComponent
  ],
})
export class SmoothDatePickerModule { }
