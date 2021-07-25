import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Booking} from './datamodels/Booking';
import {catchError} from 'rxjs/operators';
import {error} from '@angular/compiler/src/util';

class AnimeResponse {
  anime: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:8080/';
  constructor(private httpClient: HttpClient) { }

  // tslint:disable-next-line:typedef
  public getAnime() {
    return this.httpClient.get(this.baseUrl + 'response', {responseType: 'text'});
  }

  /** POST: add a new booking to the database */
  addBooking(booking: Booking): Observable<Booking> {
    const httpOptions = { headers: new HttpHeaders({'Content-Type':  'application/json'})};
    console.log(booking);
    return this.httpClient.post<Booking>(this.baseUrl + 'bookings', booking, httpOptions);
  }
}
