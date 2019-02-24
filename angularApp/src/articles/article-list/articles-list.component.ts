import { Component, OnInit } from '@angular/core';
import { pub } from '../../server/publishers';

@Component({
  selector: 'app-articles',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticleListComponent{//} implements OnInit {
  sourceName: string = 'Publisher name';

  // public publisherList: any[] = pub();
  // public ngOnInit(): void {
  //   pub();
  // }
}

