import { Component } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticleListComponent {
  articles: any[] = [
    { articleID: 1, articleName: 'BBC' },
    { articleID: 2, articleName: 'ABC' }
  ];
}

