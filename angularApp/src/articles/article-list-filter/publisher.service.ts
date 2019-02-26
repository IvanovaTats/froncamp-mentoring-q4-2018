import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SourceInformation } from './sourceInfo.model';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  apiKey = '5fb7dea8d7f440b1af9b7cd7cba9640d';
  private url = 'https://newsapi.org/v2/sources?language=en&apiKey=' + this.apiKey;

  constructor(private http: HttpClient) { }
  getPublishers(): Observable<SourceInformation> {
    return this.http.get<SourceInformation>(this.url);
  }
}
