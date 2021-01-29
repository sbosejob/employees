import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../services/shared.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  empForm: FormGroup;
  submitted = false;
  empData:any[]=[];
  id:any;

  constructor(private formBuilder: FormBuilder, 
    private sharedService: SharedService, 
    private router: Router,
    private actRoute: ActivatedRoute) { 
    
  } 

  ngOnInit() {
     this.initForm(); 
     this.actRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log('id =', this.id)
    });
    
     this.sharedService.getEmpData()
     .subscribe(res =>{     
         this.empData = res;
         //console.log('Edit =',this.empData[this.id-1]);
     }); 

     this.empForm.patchValue({    
      id: this.empData[this.id-1].id,   
      name: this.empData[this.id-1].name,          
      phone: +this.empData[this.id-1].phone,
      address: {
        city: this.empData[this.id-1].address.city,
        address_line1:this.empData[this.id-1].address.address_line1,
        address_line2: this.empData[this.id-1].address.address_line2,
        postal_code: this.empData[this.id-1].address.postal_code
      }           
    });

  }

  initForm(){
        this.empForm = this.formBuilder.group({    
          id: [0],   
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
      if (this.empForm.invalid) {
          return;
      }else{
         //console.log('value =', this.empForm.value);
         this.sharedService.updateEmpData(this.empForm.value);    
         this.router.navigate(['/']);
      }        
  }

}