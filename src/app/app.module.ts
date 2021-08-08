import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { VisitaPageComponent } from './components/visita-page/visita-page.component';
import { IconsModule } from 'angular-bootstrap-md';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import {HttpClientModule} from '@angular/common/http';
import { ManagmentRequestsPageComponent } from './components/managment-requests-page/managment-requests-page.component';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VisitaPageComponent,
    CalendarComponent,
    BookingFormComponent,
    ManagmentRequestsPageComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [RouterModule]
})
export class AppModule { }
