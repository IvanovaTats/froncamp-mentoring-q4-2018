import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleListComponent } from 'src/articles/article-list/articles-list.component';
import { ArticleDetailsComponent } from 'src/articles/article-details/article-details.component';
import { ArticleNewComponent } from 'src/articles/article-new/article-new.component';

const routes: Routes = [
  { path: 'articles', component: ArticleListComponent },
  { path: 'articles/add', component: ArticleNewComponent },
  { path: 'articles/:id', component: ArticleDetailsComponent },
  { path: '', redirectTo: 'articles', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
