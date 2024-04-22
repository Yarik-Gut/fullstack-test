import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NewsService} from "../../news.service";
import {CommonModule, DatePipe} from "@angular/common";


interface News {
  title: string;
  content: string;
  author: string;
  datePublished: string; // Adjusted to string to match formatDate return type
}

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss'],
  standalone: true,
  imports: [CommonModule],
  providers: [DatePipe]
})
export class NewsDetailComponent implements OnInit {
  news: News | null = null;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    const newsId = this.route.snapshot.params['id'];
    this.newsService.getNewsById(newsId).subscribe(data => {
      if (data) {
        this.news = data;
        this.news!.datePublished = this.formatDate(this.news!.datePublished as string);
      }
    });
  }

  formatDate(date: string | null): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd') || 'Дата недоступна';
  }
}
