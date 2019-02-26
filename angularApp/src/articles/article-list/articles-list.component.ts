import { Component, OnInit } from '@angular/core';
import { SourceNameService } from 'src/app/source-name.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticleListComponent {
  publisherName: string = 'Source name';

  constructor(public sourceName: SourceNameService) {
  }

  ngOnInit() {
    console.log('in onInit');
    this.publisherName = this.sourceName.getSourceName();
  }
}
