import { Component, OnInit } from '@angular/core';
import { PublisherService } from './publisher.service';
import { SourceNameService } from 'src/app/source-name.service';

@Component({
  selector: 'app-articles-filters',
  templateUrl: './articles-list-filter.component.html',
  styleUrls: ['./articles-list-filter.component.css']
})

export class ArticleListFilterComponent implements OnInit {
  searchText: string = 'Microsoft';

  publisher: string = 'Source Name';

  constructor(private publisherService: PublisherService,
    public sourceName: SourceNameService) {
  }

  publishers: any[];

  sourceChange() {
    // var x = document.getElementById("mySelect").value;
    this.sourceName.setSourceName(this.publisher);
    console.log('inSourceChange');
  }

  ngOnInit() {
    this.publisherService.getPublishers().subscribe(
      data => this.publishers = data['sources']
    );
  }
}

