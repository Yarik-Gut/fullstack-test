import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewsService } from './news.service';
import {CommonModule, DatePipe} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DatePipe, NewsService]
})
export class AppComponent implements OnInit {
  title = 'client';
  news: any[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getNews().subscribe(data => {
      this.news = data;
    });
  }
}
