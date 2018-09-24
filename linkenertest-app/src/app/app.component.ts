import { Component } from '@angular/core';
import { Value } from './value';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private values: Value[];

  constructor(private service:HttpService) {

  }

  ngOnInit() {
    this.service.getValues().subscribe((result:any)=>{
      this.values = result;
      console.log(this.values);
    });;
  }

}
