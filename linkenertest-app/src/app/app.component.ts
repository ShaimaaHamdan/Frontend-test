import { Component } from '@angular/core';
import { Value } from './value';
import { HttpService } from './http.service';
import { PagerService } from './pager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private values: Value[];
  private chartdata: any[];
  private pager: any = {};
  private pagedItems: any[];
  private startDate: string;
  private endDate: string;

  constructor(private service: HttpService, private pagerService: PagerService) {
    //TODO I need to add drop dwon list for changing date periods
    this.startDate = '1970-01-01T00:00:00';
    this.endDate = '2070-01-01T00:00:00';
  }

  ngOnInit() {
    this.service.getValues(this.startDate, this.endDate).subscribe((result: any) => {
      this.values = result;
      // initialize to page 1
      this.setPage(1);
      this.buildChartData();
    });;
  }

  setPage(page: number): void {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.values.length, page);

    // get current page of items
    this.pagedItems = this.values.slice(this.pager.startIndex, this.pager.endIndex + 1);
    this.buildChartData();
  }

  buildChartData() : void {
  
    this.chartdata = [];
    let line1 = {
      "name": "line 1",
      "series": []
    };
    let line2 = {
      "name": "line ",
      "series": []
    }

    this.pagedItems.forEach(element => {
      line1.series.push({
        "name": element.timestamp,
        "value": element.value1
      });
      line2.series.push({
        "name": element.timestamp,
        "value": element.value2
      });
    });

    this.chartdata.push(line1);
    this.chartdata.push(line2);
  }

  updateDataRow(row:Value) : void {
    this.service.updateValues(row).subscribe((result: any) => {
      console.log(result);
      this.buildChartData();
    });;
  }

}
