import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../../api.service';
import {Visit} from '../../datamodels/Visit';

@Component({
  selector: 'app-visit-item',
  templateUrl: './visit-item.component.html',
  styleUrls: ['./visit-item.component.css']
})
export class VisitItemComponent implements OnInit {
  @Input() visit;

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
  }

  createVisit(): Visit {
    return new Visit(this.visit);
  }

  denyRequestedBooking(): void {
    const res = this.apiService.removeRequestedBooking(this.visit.requestedDateTime.toLocaleString());
    res.subscribe(
      data => console.log('asd'),
      error => console.log(error)
    );
  }

}
