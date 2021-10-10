import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../api.service';
import {Booking} from '../../datamodels/Booking';

@Component({
  selector: 'app-booking-request-list',
  templateUrl: './booking-request-list.component.html',
  styleUrls: ['./booking-request-list.component.css']
})

export class BookingRequestListComponent implements OnInit {
  listOfRequestedBookings: Booking[];
  constructor(private apiService: ApiService) { }
  selectedRequestedBooking?: Booking;

  ngOnInit(): void {
    this.apiService.getListOfRequestedBookings().subscribe(res => {
      this.listOfRequestedBookings = res;
    });
  }

  refreshBookingList(): void {
    this.apiService.getListOfRequestedBookings().subscribe(res => {
      this.listOfRequestedBookings = res;
      location.reload();
    });
  }

  onSelect(requestedBooking: Booking): void {
    this.selectedRequestedBooking = requestedBooking;
  }
}
