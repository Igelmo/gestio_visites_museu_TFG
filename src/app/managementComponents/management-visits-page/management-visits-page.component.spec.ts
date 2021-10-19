import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ManagementVisitsPageComponent} from './management-visits-page.component';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ManagementVisitsPageComponent', () => {
  let component: ManagementVisitsPageComponent;
  let fixture: ComponentFixture<ManagementVisitsPageComponent>;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ManagementVisitsPageComponent]
    })
      .compileComponents();
    httpClient = TestBed.inject(HttpClient);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementVisitsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
