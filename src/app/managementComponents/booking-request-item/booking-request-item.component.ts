import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api.service';
import {Booking} from '../../datamodels/Booking';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-booking-request-item',
  templateUrl: './booking-request-item.component.html',
  styleUrls: ['./booking-request-item.component.css']
})

export class BookingRequestItemComponent implements OnInit {
  listOfRequestedBookings: Booking[];
  constructor(private apiService: ApiService) { }
  selectedRequestedBooking?: Booking;
  ngOnInit(): void {
    this.apiService.getListOfRequestedBookings().subscribe(res => {
      this.listOfRequestedBookings = res;
      this.listOfRequestedBookings.forEach(item => {
        console.log(item);
      });
    });
  }

  onSelect(requestedBooking: Booking): void {
    this.selectedRequestedBooking = requestedBooking;
  }
}
