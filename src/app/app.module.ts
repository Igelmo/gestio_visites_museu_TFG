import {NgModule, NO_ERRORS_SCHEMA, Pipe} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {VisitaPageComponent} from './components/visita-page/visita-page.component';
import {IconsModule, MDBBootstrapModule} from 'angular-bootstrap-md';
import {CalendarComponent} from './components/calendar/calendar.component';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {BookingFormComponent} from './components/booking-form/booking-form.component';
import {HttpClientModule} from '@angular/common/http';
import {ManagmentRequestsPageComponent} from './managementComponents/managment-requests-page/managment-requests-page.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from '../app-routing.module';
import {ManagementHeaderComponent} from './managementComponents/management-header/management-header.component';
import {ManagementFooterComponent} from './managementComponents/management-footer/management-footer.component';
import {BookingRequestListComponent} from './managementComponents/booking-request-list/booking-request-list.component';
import {FormsModule} from '@angular/forms';
import {BookingRequestItemComponent} from './managementComponents/booking-request-item/booking-request-item.component';
import {RequestedBookingInfoComponent} from './managementComponents/requested-booking-info/requested-booking-info.component';
import {ManagementVisitsPageComponent} from './managementComponents/management-visits-page/management-visits-page.component';
import {VisitsListComponent} from './managementComponents/visits-list/visits-list.component';
import {VisitItemComponent} from './managementComponents/visit-item/visit-item.component';
import {VisitInfoComponent} from './managementComponents/visit-info/visit-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VisitaPageComponent,
    CalendarComponent,
    BookingFormComponent,

    ManagmentRequestsPageComponent,
    ManagementHeaderComponent,
    ManagementFooterComponent,
    BookingRequestListComponent,
    BookingRequestItemComponent,
    RequestedBookingInfoComponent,
    ManagementVisitsPageComponent,
    VisitsListComponent,
    VisitItemComponent,
    VisitInfoComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    IconsModule,
    HttpClientModule,
    AppRoutingModule,
    CalendarModule.forRoot({ // Necessary for calendar component
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [RouterModule]
})
export class AppModule { }


