import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs'; 

@Injectable({ 
  providedIn: 'root'
})
export class SharedService {

  data:any[] = [{
    "id": 1,
    "name": "Jhon",
    "phone": "9999999999",
    "address":
    {
    "city": "Pune",
    "address_line1":"ABC road",
    "address_line2":"XYZ building",
    "postal_code":"12455"
    }
    }, {
    "id": 2,
    "name": "Jacob",
    "phone": "AZ99A99PQ9",
    "address":
    {
    "city": "Pune",
    "address_line1":"PQR road",
    "address_line2":"ABC building",
    "postal_code":"13455"
    }
    }, {
    "id": 3,
    "name": "Ari",
    "phone": "145458522",
    "address":
    {
    "city": "Mumbai",
    "address_line1":"ABC road",
    "address_line2":"XYZ building",
    "postal_code":"12455"
    }
    }];   

  constructor() {  }

  private employeeData = new BehaviorSubject<any>(this.data);

  loadEmpData(eData){
    //console.log('eData =', eData)
    eData.id = this.data.length + 1; 
    this.data.push(eData);
    this.employeeData.next(this.data);
  }

  getEmpData():Observable<any>{
    return this.employeeData.asObservable();
  }

  updateEmpData(eData){
    //console.log('eData =', eData)
    this.data[eData.id-1].name = eData.name;
    this.data[eData.id-1].phone = +eData.phone;
    this.data[eData.id-1].address ={
      city : eData.address.city,
      address_line1 : eData.address.address_line1,
      address_line2 : eData.address.address_line2,
      postal_code : eData.address.postal_code,
    }
    this.employeeData.next(this.data);
  }







}
