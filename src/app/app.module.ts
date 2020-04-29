import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {DialogNewsComponent, NewsComponent} from './news/news.component';
import {AppRoutingModule} from './app-routing.module';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule,
  MatExpansionModule, MatFormFieldModule,
  MatGridListModule, MatIconModule, MatInputModule,
  MatListModule, MatPaginatorModule, MatSelectModule,
  MatSidenavModule, MatSortModule, MatTableModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {BottomSheetOverviewExampleSheet, JournalComponent} from './journal/journal.component';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './chat/message/message.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {ChatService} from './chat/chat.service';
import {CookieService} from 'ngx-cookie-service';
import {WebsocketService} from './websocket.service';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    JournalComponent,
    BottomSheetOverviewExampleSheet,
    ChatComponent,
    MessageComponent,
    UserComponent,
    LoginComponent,
    DialogNewsComponent
  ],
  entryComponents: [BottomSheetOverviewExampleSheet, DialogNewsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatBottomSheetModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatExpansionModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [ChatService, WebsocketService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
