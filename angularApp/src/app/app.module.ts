import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleListComponent } from 'src/articles/article-list/articles-list.component';
import { ArticleDetailsComponent } from 'src/articles/article-details/article-details.component';
import { ArticleNewComponent } from 'src/articles/article-new/article-new.component';
import { ArticleListFilterComponent } from 'src/articles/article-list-filter/articles-list-filter.component';
import { ArticleComponent } from 'src/articles/article/article.component';
import { NgxPopper } from 'angular-popper';
import { FilterArticle } from '../articles/shared/article-filter';


@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleDetailsComponent,
    ArticleNewComponent,
    ArticleListFilterComponent,
    ArticleComponent,
    FilterArticle
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPopper,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FilterArticle]
})
export class AppModule { }
