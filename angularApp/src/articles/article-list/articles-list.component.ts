import { Component, OnInit } from '@angular/core';
import { pub } from '../../server/publishers';

@Component({
  selector: 'app-articles',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticleListComponent {
  sourceName: string;

  updateName(sourceName: string): void {
    console.log(sourceName);
    this.sourceName = sourceName;
  }
}

