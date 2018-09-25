import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LinkenerDataTableComponent } from './linkener-data-table/linkener-data-table.component';
import { LinkenerChartComponent } from './linkener-chart/linkener-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LinkenerDataTableComponent,
    LinkenerChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
