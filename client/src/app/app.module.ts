import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import {AppRoutingModule} from "./app.routes";
import {NewsComponent} from "./pages/news/news.component";
import {NewsDetailComponent} from "./pages/news-detail/news-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewsDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
