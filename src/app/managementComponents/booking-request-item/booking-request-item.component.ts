import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../../api.service';
import {Visit} from '../../datamodels/Visit';

@Component({
  selector: 'app-booking-request-item',
  templateUrl: './booking-request-item.component.html',
  styleUrls: ['./booking-request-item.component.css']
})
export class BookingRequestItemComponent implements OnInit {
  @Input() requested;
  @Input() refreshBookingList: () => void;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  createVisit(): Visit {
    return new Visit(this.requested);
  }

  acceptRequestedBooking(): void {
    this.apiService.addVisit(this.createVisit()).subscribe(
      data => console.log(data),
      error => console.log(error),
      () => this.refreshBookingList()
    );
  }

  denyRequestedBooking(): void {
    this.apiService.removeRequestedBooking(this.requested.requestedDateTime.toLocaleString()).subscribe(
      data => console.log(data),
      error => console.log(error),
      () => this.refreshBookingList()
    );
  }

}
