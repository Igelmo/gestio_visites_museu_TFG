import {AfterViewInit, Component, Input, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {ApiService} from '../../api.service';
import {Booking} from '../../datamodels/Booking';
import {CalendarComponent} from '../calendar/calendar.component';
import {Visitor} from '../../datamodels/Visitor';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  constructor(private apiService: ApiService) { }
  @Input() currentDayClicked;
  @Input() currentHourClicked;

  ngOnInit(): void {
  }

  createBooking(): Booking {
    console.log(this.currentDayClicked);
    console.log(this.currentHourClicked);

    const visitor = new Visitor(
      (document.getElementById('emailVisit') as HTMLInputElement).value,
      (document.getElementById('nameVisit') as HTMLInputElement).value,
      (document.getElementById('surnamesVisit')as HTMLInputElement).value,
      (document.getElementById('phoneVisit') as HTMLInputElement).value,
      (document.getElementById('schoolVisit') as HTMLInputElement).value,
    );
    const booking = new Booking(
      this.currentDayClicked,
      this.currentHourClicked,
      visitor,
      (document.getElementById('numVisit') as HTMLInputElement).value,
      (document.getElementById('typeVisit') as HTMLInputElement).value,
      (document.getElementById('commentVisit') as HTMLInputElement).value
    );
    return booking;
  }
  sendBookingToBackend(): void {
    const res = this.apiService.addBooking(this.createBooking());
    res.subscribe(
      data => console.log('asd'),
      error => console.log(error)
    );
    document.getElementById('nameVisit');
  }



}
