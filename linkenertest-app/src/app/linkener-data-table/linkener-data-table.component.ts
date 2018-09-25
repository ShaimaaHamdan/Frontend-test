import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Value } from '../value';
import { PagerService } from '../pager.service';

@Component({
  selector: 'app-linkener-data-table',
  templateUrl: './linkener-data-table.component.html',
  styleUrls: ['./linkener-data-table.component.css']
})
export class LinkenerDataTableComponent implements OnInit {

  @Input()
  private values: Value[];

  @Input()
  private pager: any;

  private editRowId: any;


  @Output() onPageClick: EventEmitter<any> = new EventEmitter();
  @Output() onUpdateRow: EventEmitter<any> = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
  }

  pageWasClicked(page: number): void {
    this.onPageClick.emit([page]);
  }

  toggle(id) {
    console.log(id);
    this.editRowId = id;
  }

  updateValue(row: Value) {
    this.editRowId = 0;
    this.onUpdateRow.emit([row]);
  }
}
