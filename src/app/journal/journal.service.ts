import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, of} from 'rxjs';

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

  loadJournal(): Observable<Lesson[]> {
    return this.http.get<any>(`${environment.ws_url}/getLessons?groupid=1&groupid=2&loginid=1`);
    // return of(this.lessonList);
  }
}
