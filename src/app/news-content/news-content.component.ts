import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.css']
})
export class NewsContentComponent implements OnInit {
  @Input() newscontent: string;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	this.getNewsContent();
  }

  getNewsContent(): void {
  	console.log("news content");
  	const id = this.route.snapshot.paramMap.get('id');
  	console.log("id: ", id);
  	this.newscontent = id;
  	console.log("news content: ", this.newscontent);
  }

}
