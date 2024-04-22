import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {NewsComponent} from "./pages/news/news.component";
import { NewsDetailComponent } from './pages/news-detail/news-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: 'news', component: NewsComponent },
  { path: 'news/:id', component: NewsDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
