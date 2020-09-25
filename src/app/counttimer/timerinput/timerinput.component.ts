import { TimerinputService } from './../timerinput/timerinput.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timerinput',
  templateUrl: './timerinput.component.html',
  styleUrls: ['./timerinput.component.css']
})
export class TimerinputComponent implements OnInit {
 
  constructor(private tservice: TimerinputService) { }
  
  ngOnInit(): void {
  }
getValue(val){
this.tservice.getValue(val);
}
}
