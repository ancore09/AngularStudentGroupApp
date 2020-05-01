import {Component, Inject, OnInit} from '@angular/core';
import {NewsService} from './news.service';
import {JournalService} from '../journal/journal.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

export interface DialogData {
  title: string;
  body: string;
  epilogue: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  title: string;
  body: string;
  epilogue: string;

  isButtonFisible = true;

  constructor(public newsService: NewsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.newsService.loadNews();
  }

  openDialog(): void {
    this.isButtonFisible = false;
    const dialogRef = this.dialog.open(DialogNewsComponent, {
      width: '80%',
      data: {title: this.title, body: this.body, epilogue: this.epilogue}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isButtonFisible = true;
      console.log(result);
      if (result) {
        this.title = result[0];
        this.body = result[1];
        this.epilogue = result[2];
      }
    });
  }

}

@Component({
  selector: 'app-dialog-news',
  templateUrl: './news.dialog.component.html',
  styleUrls: ['./news.dialog.component.scss']
})
export class DialogNewsComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogNewsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}


