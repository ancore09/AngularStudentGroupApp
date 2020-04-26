import { Component, OnInit } from '@angular/core';
import {NewsService} from './news.service';
import {JournalService} from '../journal/journal.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(public newsService: NewsService, public journalService: JournalService) { }

  ngOnInit() {
    this.newsService.loadNews();
    // this.journalService.loadJournal();
  }

}
