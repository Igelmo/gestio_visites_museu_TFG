import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-booking-request-item',
  templateUrl: './booking-request-item.component.html',
  styleUrls: ['./booking-request-item.component.css']
})
export class BookingRequestItemComponent implements OnInit {
  @Input() requested;
  constructor() { }

  ngOnInit(): void {
  }

  acceptRequestedBooking(): void {}
  denyRequestedBooking(): void {}

}
