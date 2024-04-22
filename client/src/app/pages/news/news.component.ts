import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NewsService} from "../../news.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  standalone: true,
  imports: [CommonModule],
  providers: []
})
export class NewsComponent implements OnInit {
  title = 'client';
  news: any[] = [];

  constructor(
    private newsService: NewsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.newsService.getNews().subscribe(data => {
      this.news = data;
    });
  }

  showDetails(article: any) {
    this.router.navigate(['/news', article._id]);
  }
}
