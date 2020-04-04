import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

export interface Lesson {
  ID: number;
  group_id: number;
  datedmy: string;
  theme: string;
  homework: string;
  progcomment: string;
  times: string;
  filehash: string;
}

@Injectable({
  providedIn: 'root'
})
export class JournalService {
  lessonList: Lesson[] = [];
  public currentElement: Lesson;

  constructor(private http: HttpClient) { }

  loadJournal() {
    this.http.get<any>(`${environment.ws_url}/getLessons?groupid=1&groupid=2&loginid=1`).subscribe(response => {
      this.lessonList = response;
      this.lessonList = [...this.lessonList, ...response];
      console.log(this.lessonList);
      return response;
    });
    return this.lessonList;
  }
}
