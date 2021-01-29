import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {  
  empForm: FormGroup;
  submitted = false;
  empData:any[]=[];

  constructor(private formBuilder: FormBuilder, 
    private sharedService: SharedService, 
    private router: Router) {     
  } 

  ngOnInit() {
     this.initForm();  
  }

  initForm(){
        this.empForm = this.formBuilder.group({    
          id:[0],        
          name: ['', [Validators.required, Validators.minLength(4)]],
          phone: ['', Validators.required],
          address: this.formBuilder.group({
            city: [''],
            address_line1: [''],
            address_line2: [''],
            postal_code: ['']
          }),           
      });
  }
 
  get f() { return this.empForm.controls; }


  keyPress(event: any) {
    //console.log('keyPress', event)   
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }   
  }

  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.empForm.invalid) {
          return;
      }else{
         //console.log('value =', this.empForm.value);
         this.sharedService.loadEmpData(this.empForm.value);    
         this.router.navigate(['/']);
      }    
     
  }




}