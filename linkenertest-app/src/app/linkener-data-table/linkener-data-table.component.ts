import { Component, OnInit, Input } from '@angular/core';
import { Value } from '../value';

@Component({
  selector: 'app-linkener-data-table',
  templateUrl: './linkener-data-table.component.html',
  styleUrls: ['./linkener-data-table.component.css']
})
export class LinkenerDataTableComponent implements OnInit {

  @Input()
  private values : Value[];

  constructor() { 
    console.log("data-table-component....");
    console.log(this.values);
  }

  ngOnInit() {
    console.log(this.values);

  }

}
