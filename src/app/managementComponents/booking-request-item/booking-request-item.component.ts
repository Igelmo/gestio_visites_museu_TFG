import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../../api.service';
import {Booking} from '../../datamodels/Booking';
import {Visit} from '../../datamodels/Visit';

@Component({
  selector: 'app-booking-request-item',
  templateUrl: './booking-request-item.component.html',
  styleUrls: ['./booking-request-item.component.css']
})
export class BookingRequestItemComponent implements OnInit {
  @Input() requested;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  createVisit(): Visit {
    return new Visit(this.requested);
  }

  acceptRequestedBooking(): void {
    const res = this.apiService.addVisit(this.createVisit());
    res.subscribe(
      data => console.log('asd'),
      error => console.log(error)
    );
    location.reload();
  }

  denyRequestedBooking(): void {
    const res = this.apiService.removeRequestedBooking(this.requested.requestedDateTime.toLocaleString());
    res.subscribe(
      data => console.log('asd'),
      error => console.log(error)
    );
    location.reload();
  }

}
