import { NgModule } from '@angular/core';
import { SmoothDatePickerComponent } from './smooth-date-picker.component';
import { SmoothMonthPickerComponent } from './components/smooth-month-picker/smooth-month-picker.component';
import { SmoothDayPickerComponent } from './components/smooth-day-picker/smooth-day-picker.component';
import { SmoothYearPickerComponent } from './components/smooth-year-picker/smooth-year-picker.component';
import { CommonModule } from '@angular/common';
import { SmoothHeaderComponent } from './components/smooth-header/smooth-header.component';

@NgModule({
  declarations: [SmoothDatePickerComponent, SmoothMonthPickerComponent, SmoothDayPickerComponent, SmoothYearPickerComponent, SmoothHeaderComponent], 
  imports: [
    CommonModule
  ],
  exports: [
    SmoothDatePickerComponent
  ],
})
export class SmoothDatePickerModule { }
