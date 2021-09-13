import {ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localeEs from '@angular/common/locales/es';
import {CalendarEvent, CalendarMonthViewDay, CalendarView} from 'angular-calendar';
import {Subject} from 'rxjs';

registerLocaleData(localeEs);

const RED_CELL: 'mwl-calendar-month-cell' = 'mwl-calendar-month-cell';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CalendarComponent implements OnInit {
  @ViewChild('myForm') form: ElementRef;
  private colorCell: string;
  constructor() {  }
  currentDate = new Date();
  viewDate = new Date();
  locale = 'es';
  weekStartsOn = '1';
  excludeDays = [6, 0];
  dayStartHour = 8;
  dayEndHour = 17;
  lengthVisitsHours = 1;
  sizeHourRange = 30;
  hiddenHours = true;
  hiddenBooking = true;
  currentDayClicked = new Date();
  currentHourClicked = new Date();
  view = CalendarView.Month;
  refresh: Subject<any> = new Subject();
  CalendarView = CalendarView;
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
  dayClicked({date}: { date: Date}, day: CalendarMonthViewDay): void {
    if (this.hiddenHours) {
      this.hiddenHours = false;
    }
    if (date <= this.currentDate) {
      this.hiddenHours = true;
    }
    this.currentDayClicked = date;
    this.refreshView();
    // date..style.backgroundColor = '#16c79a';
  }

  hourClicked({date}: { date: Date}): void {
    if (this.hiddenBooking) {
      this.hiddenBooking = false;
    }
    if (date <= this.currentDate) {
      this.hiddenBooking = true;
    }
    if (!this.hiddenBooking) {
      scrollTo(this.form.nativeElement.getBoundingClientRect().x,
            1500);
    }
    this.currentHourClicked = date;
  }

  refreshView(): void {
    this.colorCell = '#16c79a';
    this.colorCell = this.colorCell === 'cal-day-selected' ? 'cal-day-deselected' : 'cal-day-selected';
    this.refresh.next();
  }

  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach((day) => {
      if (day.isPast) {
        day.cssClass = 'cal-past-days';
      }
      if (day.isToday) {
        day.cssClass = 'cal-current-day';
      }
    });
  }

  changeToPreviousMonth(): void {
    this.view = CalendarView.Day;
    this.viewDate.setMonth(this.viewDate.getMonth() - 1);
    this.view = CalendarView.Month;
  }

  changeToNextMonth(): void {
    this.view = CalendarView.Day;
    this.viewDate.setMonth(this.viewDate.getMonth() + 1);
    this.view = CalendarView.Month;
  }
  getDayClicked(): Date {
    return this.currentDayClicked;
  }

  getHourClicked(): Date {
    return this.currentHourClicked;
  }

}

