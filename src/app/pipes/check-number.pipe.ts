import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkNumber'
})
export class CheckNumberPipe implements PipeTransform {

  transform(value: any, phoneNo: any): any {
      
     let reg = /^[0-9]*$/;         
      if (reg.test(phoneNo)) {         
        return value;
      }else{           
        return 'NA';
      }
   
  }

}
