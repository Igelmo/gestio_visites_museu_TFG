import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api.service';

@Component({
  selector: 'app-visita-page',
  templateUrl: './visita-page.component.html',
  styleUrls: ['./visita-page.component.css']
})
export class VisitaPageComponent implements OnInit {
  constructor(private apiService: ApiService) { }

  ngOnInit(): void { }

}
