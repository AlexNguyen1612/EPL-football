import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor() { }

  news:string;

  getNews(news:string): void {
  	this.news = news;
  }

  ngOnInit() {
  }

}
