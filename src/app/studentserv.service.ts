import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class StudentservService {
 users : any;
  constructor(private Http: HttpClient) { }

  public getData()
  {
   return this.Http.get("http://dummy.restapiexample.com/api/v1/employees")
   
  
  }
}
