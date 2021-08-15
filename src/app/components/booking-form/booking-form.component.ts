import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../../api.service';
import {Booking} from '../../datamodels/Booking';
import {Visitor} from '../../datamodels/Visitor';
import {AssistantsType} from '../../datamodels/AssistantsType';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  constructor(private apiService: ApiService) { }
  @Input() currentDateTimeClicked;

  ngOnInit(): void {
  }

  createBooking(): Booking {

    const visitor = new Visitor(
      (document.getElementById('emailVisit') as HTMLInputElement).value,
      (document.getElementById('nameVisit') as HTMLInputElement).value,
      (document.getElementById('surnamesVisit')as HTMLInputElement).value,
      (document.getElementById('phoneVisit') as HTMLInputElement).value,
      (document.getElementById('schoolVisit') as HTMLInputElement).value,
    );
    console.log(this.currentDateTimeClicked);
    return new Booking(
      this.currentDateTimeClicked,
      visitor,
      (document.getElementById('numVisit') as HTMLInputElement).value,
      (document.getElementById('typeVisit') as HTMLInputElement).value as unknown as AssistantsType,
      (document.getElementById('commentVisit') as HTMLInputElement).value
    );
  }
  sendBookingToBackend(): void {
    const res = this.apiService.addBooking(this.createBooking());
    res.subscribe(
      data => console.log('asd'),
      error => console.log(error)
    );
  }



}
