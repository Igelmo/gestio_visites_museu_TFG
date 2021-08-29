import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-requested-booking-info',
  templateUrl: './requested-booking-info.component.html',
  styleUrls: ['./requested-booking-info.component.css']
})
export class RequestedBookingInfoComponent implements OnInit {
  @Input() requestedBookingInfo;

  constructor() {
  }

  ngOnInit(): void {
  }

}
