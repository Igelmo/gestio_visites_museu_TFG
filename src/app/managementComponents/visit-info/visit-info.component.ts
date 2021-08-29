import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-visit-info',
  templateUrl: './visit-info.component.html',
  styleUrls: ['./visit-info.component.css']
})
export class VisitInfoComponent implements OnInit {
  @Input() visitInfo;
  constructor() { }

  ngOnInit(): void {
  }

}
