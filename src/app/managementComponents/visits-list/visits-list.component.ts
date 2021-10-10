import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../api.service';
import {Visit} from '../../datamodels/Visit';

@Component({
  selector: 'app-visits-list',
  templateUrl: './visits-list.component.html',
  styleUrls: ['./visits-list.component.css']
})
export class VisitsListComponent implements OnInit {
  listOfVisits: Visit[];
  selectedVisit?: Visit;

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getListOfPendingVisits().subscribe(res => {
      this.listOfVisits = res;
    });
  }

  refreshVisitList(): void {
    this.apiService.getListOfPendingVisits().subscribe(res => {
      this.listOfVisits = res;
      location.reload();
    });
  }

  onSelect(requestedBooking: Visit): void {
    this.selectedVisit = requestedBooking;
  }
}
