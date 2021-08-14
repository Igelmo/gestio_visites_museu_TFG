import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../../api.service';

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

  acceptRequestedBooking(): void {}
  denyRequestedBooking(): void {
    const res = this.apiService.removeRequestedBooking(this.requested.requestedDay.toLocaleString(),
                                                       this.requested.requestedHour.toLocaleString());
    res.subscribe(
      data => console.log('asd'),
      error => console.log(error)
    );
  }

}
