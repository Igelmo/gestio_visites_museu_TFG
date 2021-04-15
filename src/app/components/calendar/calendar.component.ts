import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import {CalendarMonthViewBeforeRenderEvent, CalendarMonthViewDay, CalendarView} from 'angular-calendar';
import { CalendarEvent } from 'angular-calendar';

registerLocaleData(localeEs);

const RED_CELL: 'mwl-calendar-month-cell' = 'mwl-calendar-month-cell';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  encapsulation: ViewEncapsulation.None,

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
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[]}, day: CalendarMonthViewDay): void {
    if (this.hiddenHours) {
      this.hiddenHours = false;
    }
    if (date <= this.currentDate) {
      this.hiddenHours = true;
    }
    // day.cssClass = 'cal-day-selected';
    this.currentDayClicked = date;
  }

  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach((day) => {
      if (day.isPast || day.isToday) {
        day.cssClass = 'cal-day-selected';
      }
    });
  }
}
