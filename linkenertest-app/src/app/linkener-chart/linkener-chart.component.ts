import { Component, OnInit, Input } from '@angular/core';
import { Value } from '../value';

@Component({
  selector: 'app-linkener-chart',
  templateUrl: './linkener-chart.component.html',
  styleUrls: ['./linkener-chart.component.css']
})
export class LinkenerChartComponent implements OnInit {

  @Input()
  values: Value[];


  view: any[] = [1200, 400];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Time';
  showYAxisLabel = true;
  yAxisLabel = 'Values';
  showGridLines = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  constructor() {
    console.log(this.values)
    Object.assign(this, this.values)  
   }

  ngOnInit() {
  }

}
