import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { PublisherService } from './publisher.service';

@Component({
  selector: 'app-articles-filters',
  templateUrl: './articles-list-filter.component.html',
  styleUrls: ['./articles-list-filter.component.css']
})

export class ArticleListFilterComponent implements OnInit {
  searchText: string = 'Microsoft';

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSourceNameSelected = new EventEmitter();

  constructor( private publisherService: PublisherService){

  }

  publishers: any[] = [];

  clicked(name: string): void {
    this.onSourceNameSelected.emit(name);
  }

  ngOnInit(){
    this.publishers = this.publisherService.getPublishers();
  }
}

