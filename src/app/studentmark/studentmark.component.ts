import { studentData } from './../studentData';
import { StudentservService } from './../studentserv.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { Injectable } from '@angular/core';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-studentmark',
  templateUrl: './studentmark.component.html',
  styleUrls: ['./studentmark.component.css'],
  
})
export class StudentmarkComponent implements OnInit {
  
   ELEMENT_DATA: studentData[]=[];
  
  
  displayedCoulmn: string[] = ['id','employee_name','employee_salary','employee_age'];
  dataSource = new MatTableDataSource<studentData>(this.ELEMENT_DATA);
  sort: MatSort;
  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
     }
    
    
    
    setDataSourceAttributes() {
      
      this.dataSource.sort = this.sort;
      }
  constructor(private serv: StudentservService) {
   }
   
  ngOnInit(): void {
    
    this.getStudentData();
    this.dataSource.sort=this.sort;
    
  }
  
  public getStudentData (){
    let response=this.serv.getData();
    response
    .pipe(map(responseData=>{
      const postArray=[];
      for(const key in responseData){
        postArray.push(responseData[key])
      }
      return postArray;
    }))
    .subscribe(report=>this.dataSource.data=report[1] as studentData[] );
     
    
  }

}
