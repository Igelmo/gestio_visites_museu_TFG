import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../api.service';
import {Booking} from '../../datamodels/Booking';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  createBooking(): Booking {
    const booking = new Booking(
      (document.getElementById('nameVisit') as HTMLInputElement).value,
      (document.getElementById('surnamesVisit')as HTMLInputElement).value,
      (document.getElementById('schoolVisit') as HTMLInputElement).value,
      (document.getElementById('emailVisit') as HTMLInputElement).value,
      (document.getElementById('phoneVisit') as HTMLInputElement).value,
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
