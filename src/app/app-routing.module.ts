import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './news/news.component';
import {JournalComponent} from './journal/journal.component';
import {ChatComponent} from './chat/chat.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {path: 'news', component: NewsComponent},
  {path: 'journal', component: JournalComponent},
  {path: 'chat', component: ChatComponent},
  {path: '', component: LoginComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
