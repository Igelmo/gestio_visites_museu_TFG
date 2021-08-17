import {AssistantsType} from './AssistantsType';
import {Visitor} from './Visitor';
import {Observable} from 'rxjs';
import {Booking} from './Booking';

export class Visit {
  visitDateTime: string;
  requestedBooking: Booking;
  guideEmail: string;
  completed: boolean;

  constructor(
    requestedBooking: Booking) {
    this.visitDateTime = requestedBooking.requestedDateTime;
    this.requestedBooking = requestedBooking;
    this.guideEmail = 'guide@gmail.com';
    this.completed = false;
  }

}
