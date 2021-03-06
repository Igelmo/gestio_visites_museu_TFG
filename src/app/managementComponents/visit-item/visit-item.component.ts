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
  @Input() refreshVisitList: () => void;

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
  }

  createVisit(): Visit {
    return new Visit(this.visit);
  }

  cancelVisit(): void {
    this.apiService.removeVisit(this.visit.visitDateTime.toLocaleString()).subscribe(
      data => console.log(data),
      error => console.log(error),
      () => this.refreshVisitList()
    );
  }

}
