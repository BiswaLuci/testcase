import { TimerinputService } from './../timerinput/timerinput.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
 timervalue:number;
 pause:boolean;
 start:boolean;
  constructor( private timerinputservisce: TimerinputService) { }

  ngOnInit(): void {
    this.timerinputservisce.$isTimer
    .subscribe((data)=>{this.timervalue=data})
    
    
  }
  tid=setInterval(()=>{
    this.timervalue=this.timervalue-1;
    if(this.timervalue==0){
      clearInterval(this.tid)
    }
    else if(this.pause==true){
      
    }
  },1000)
  

}

