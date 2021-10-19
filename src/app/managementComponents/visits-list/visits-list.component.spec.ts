import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VisitsListComponent} from './visits-list.component';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('VisitsListComponent', () => {
  let component: VisitsListComponent;
  let fixture: ComponentFixture<VisitsListComponent>;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [VisitsListComponent]
    })
      .compileComponents();
    httpClient = TestBed.inject(HttpClient);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
