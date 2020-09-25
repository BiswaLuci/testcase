import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerinputService {
$isTimer=new EventEmitter();
value:number;
pause:boolean=false;
start:boolean=true;
  constructor() { }

  getValue(val){
    if(this.start&&val>0){
      this.value=val;
      this.start=false;
      this.$isTimer.emit(this.value);
     
      
      
    }
    else if(this.start==false){
      this.pause=true;
      
    }
  
  
  }
  }

