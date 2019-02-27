import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArticleInformation } from './articlesInfo.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  apiKey = '5fb7dea8d7f440b1af9b7cd7cba9640d';
  private url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.apiKey;

  constructor(private http: HttpClient) { }
  getArticles(): Observable<ArticleInformation> {
    return this.http.get<ArticleInformation>(this.url);
  }
}
