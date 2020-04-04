import {Component, OnInit, ViewChild} from '@angular/core';
import {JournalService, Lesson} from './journal.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  displayedColumns: string[] = ['datedmy', 'theme', 'homework'];
  dataSource = new MatTableDataSource(this.journalService.lessonList);

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public journalService: JournalService, private _bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.paginator._changePageSize(10);
  }

  openBottomSheet(element): void {
    this.journalService.currentElement = element;
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
})
export class BottomSheetOverviewExampleSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>, private journalService: JournalService) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}

