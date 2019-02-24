import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleListComponent } from 'src/articles/article-list/articles-list.component';
import { ArticleDetailsComponent } from 'src/articles/article-details/article-details.component';
import { ArticleNewComponent } from 'src/articles/article-new/article-new.component';
import { ArticleListFilterComponent } from 'src/articles/article-list-filter/articles-list-filter.component';
import { HttpClient } from 'selenium-webdriver/http';
import { ArticleComponent } from 'src/articles/article/article.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleDetailsComponent,
    ArticleNewComponent,
    ArticleListFilterComponent,
    ArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
