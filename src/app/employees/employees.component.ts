import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  empData:any=[];
  nameSearch:string ='';

  constructor(private sharedService: SharedService) {     
  } 

  ngOnInit(): void {
    this.sharedService.getEmpData()
    .subscribe(res =>{
        //console.log('employeeData =',res);
        this.empData = res;
        console.log('EMP =',this.empData);
    }); 
  }

}
