import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import {CalendarEventAction, CalendarView} from 'angular-calendar';
import { CalendarEvent } from 'angular-calendar';

registerLocaleData(localeEs);

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  constructor() { }
  currentDate = new Date();
  locale = 'es';
  weekStartsOn = '1';
  excludeDays = [6, 0];
  dayStartHour = 8;
  dayEndHour = 17;
  lengthVisitsHours = 1;
  sizeHourRange = 30;
  hiddenHours = true;
  currentDayClicked = new Date();
  view = CalendarView.Month;

  events: CalendarEvent[] = [{
      title: 'Click me',
      start: new Date(),
    }
  ];

  ngOnInit(): void {
  }
  onDayEvent({ event }: { event: CalendarEvent }): void {
    console.log( event);
  }
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (this.hiddenHours) {
      this.hiddenHours = false; this.currentDayClicked = date;
    }
    if (this.currentDayClicked !== date) {
      this.currentDayClicked = date;
    }
  }
}
