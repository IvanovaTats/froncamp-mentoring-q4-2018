import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  apiKey = '5fb7dea8d7f440b1af9b7cd7cba9640d';//"75f32e4838744d73b2a6392f4143f2e0";;

  getArticles() { }

  constructor(private http: HttpClient) { }
  initSources() {
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.apiKey);
  }
  initArticles() {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.apiKey);
  }
}
