import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import {CalendarView} from 'angular-calendar';

registerLocaleData(localeEs);

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  viewDate: Date = new Date();
  locale = 'es';
  weekStartsOn = '1';
  excludeDays = [6, 0];
  dayStartHour = 8;
  dayEndHour = 17;
  lengthVisitsHours = 1;
  sizeHourRange = 30;
  hiddenHours = false;
  view = CalendarView.Month;
  filterDates = (date: Date): boolean => {
    return date < this.viewDate;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
