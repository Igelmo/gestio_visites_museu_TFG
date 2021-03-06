import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Booking} from './datamodels/Booking';
import {Visit} from './datamodels/Visit';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
//  baseUrl = 'https://backend-museu.herokuapp.com/';
  baseUrl = 'http://localhost:8080/';
  constructor(private httpClient: HttpClient) { }

  public getListOfRequestedBookings(): Observable<Booking[]> {
    return this.httpClient.get<Booking[]>(this.baseUrl + 'requestedBookings');
  }

  public getListOfPendingVisits(): Observable<Visit[]> {
    return this.httpClient.get<Visit[]>(this.baseUrl + 'pendingVisits');
  }

  /** POST: add a new booking to the database */
  addBooking(booking: Booking): Observable<HttpResponse<string>> {
    return this.httpClient.post(this.baseUrl + 'bookings', booking, {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      observe: 'response',
      responseType: 'text'
    });
  }

  addVisit(acceptRequested: Visit): Observable<Visit> {
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.httpClient.post<Visit>(this.baseUrl + 'visits', acceptRequested, httpOptions);
  }

  removeRequestedBooking(dateTime: string): Observable<any> {
    return this.httpClient.delete(this.baseUrl + 'requestedBookings/' + dateTime);
  }

  removeVisit(dateTime: string): Observable<any> {
    return this.httpClient.delete(this.baseUrl + 'visits/' + dateTime);
  }
}
