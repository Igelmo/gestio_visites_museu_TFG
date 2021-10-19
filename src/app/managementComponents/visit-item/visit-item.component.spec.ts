import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VisitItemComponent} from './visit-item.component';
import {VisitsListComponent} from '../visits-list/visits-list.component';
import {VisitaPageComponent} from '../../components/visita-page/visita-page.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient} from '@angular/common/http';

describe('VisitItemComponent', () => {
  let component: VisitItemComponent;
  let fixture: ComponentFixture<VisitItemComponent>;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [VisitItemComponent]
    })
      .compileComponents();
    httpClient = TestBed.inject(HttpClient);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitItemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
