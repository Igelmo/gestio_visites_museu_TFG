import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

class AnimeResponse {
  anime: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  // tslint:disable-next-line:typedef
  public getAnime() {
    return this.httpClient.get('http://localhost:8080/response', {responseType: 'text'});
  }
}
