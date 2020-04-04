import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './news/news.component';
import {JournalComponent} from './journal/journal.component';


const routes: Routes = [
  {path: 'news', component: NewsComponent},
  {path: 'journal', component: JournalComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
