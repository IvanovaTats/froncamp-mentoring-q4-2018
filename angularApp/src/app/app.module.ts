import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleListComponent } from 'src/articles/articles-list.component';
import { ArticleDetailsComponent } from 'src/articles/article-details.component';
import { ArticleNewComponent } from 'src/articles/article-new.component';
import { HttpClient } from 'selenium-webdriver/http';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleDetailsComponent,
    ArticleNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'articles', component: ArticleListComponent },
      { path: 'articles/add', component: ArticleNewComponent },
      { path: 'articles/details/:id', component: ArticleDetailsComponent },
      { path: '', redirectTo: 'articles', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
