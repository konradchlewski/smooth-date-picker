import { Component, OnInit, Input } from '@angular/core';
import { Days } from '../../models/Days';
import * as moment from 'moment';

@Component({
  selector: 'smooth-day-picker',
  templateUrl: './smooth-day-picker.component.html',
  styleUrls: ['./smooth-day-picker.component.scss']
})
export class SmoothDayPickerComponent implements OnInit {

  @Input('date') date: string | Date;

  days: Array<string> = Days;
  defaultDate: Date;
  daysNumber: number;
  week: Array<any> = [];

  calendar: Array<any> = [];
  constructor() { }

  ngOnInit() {
    this.defaultDate = new Date(this.date);
    this.createCalendarForMonth();
  }

  createCalendarForMonth() {

    // Calculate dates 
    let actualDate = moment(this.defaultDate).format('M/YYYY');
    let beforeDate = moment(this.defaultDate).subtract(1, 'month').format('M/YYYY');
    let afterDate = moment(this.defaultDate).add(1, 'month').format('M/YYYY');

    let daysInActualMonth = moment(this.defaultDate).daysInMonth();
    let daysInMonthBefore = moment(this.defaultDate).subtract(1, 'month').daysInMonth();

    let lastDayOfWeekInMonthBefore = moment(`${daysInMonthBefore}/${beforeDate}`, 'DD/M/YYYY').format('dd');
    let indexLastDayOfWeekInMonthBefore = this.days.indexOf(lastDayOfWeekInMonthBefore);


    // Detect days in month before to end that month
    for (let i = daysInMonthBefore - indexLastDayOfWeekInMonthBefore; i <= daysInMonthBefore; i++) {
      this.week.push({
        day: i,
        month: moment(this.defaultDate).subtract(1, 'month').format('MMMM'),
        year: moment(this.defaultDate).subtract(1, 'month').format('YYYY'),
        dayOfWeek: moment(`${i}/${beforeDate}`, 'DD/M/YYYY').format('dd')
      });
    }

    // Detect days in actual month
    for (let i = 1; i <= daysInActualMonth; i++) {
      if (moment(`${i}/${actualDate}`, 'DD/M/YYYY').format('dd') === 'Su') {
        this.week.push({
          day: i,
          month: moment(this.defaultDate).format('MMMM'),
          year: moment(this.defaultDate).format('YYYY'),
          dayOfWeek: moment(`${i}/${actualDate}`, 'DD/M/YYYY').format('dd')
        });
        this.calendar.push(this.week);
        this.week = [];
      } else {
        this.week.push({
          day: i,
          month: moment(this.defaultDate).format('MMMM'),
          year: moment(this.defaultDate).format('YYYY'),
          dayOfWeek: moment(`${i}/${actualDate}`, 'DD/M/YYYY').format('dd')
        });
      }
    }

    let firstDayOfWeekInMonthAfter = moment(`1/${afterDate}`, 'DD/M/YYYY').format('dd');
    let indexFirstDayOfMonthAfter = this.days.indexOf(firstDayOfWeekInMonthAfter);

    // Detect days in month after
    for (let i = 1; i <= this.days.length - indexFirstDayOfMonthAfter; i++) {
      this.week.push({
        day: i,
        month: moment(this.defaultDate).add(1, 'month').format('MMMM'),
        year: moment(this.defaultDate).add(1, 'month').format('YYYY'),
        dayOfWeek: moment(`${i}/${afterDate}`, 'DD/M/YYYY').format('dd')
      })
    }
    this.calendar.push(this.week);
  }

}
