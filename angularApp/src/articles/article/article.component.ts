import { Component, OnInit, Input } from '@angular/core';
import { FilterService } from '../article-list-filter/filter.service';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() searchText: string;
  constructor(private filterService: FilterService,
              private articleService: ArticleService) {
    this.searchText = this.filterService.getSearchText();
  }

  articles: any[] = [];

    ngOnInit() {
      this.articles = this.articleService.getArticles();
}

}
