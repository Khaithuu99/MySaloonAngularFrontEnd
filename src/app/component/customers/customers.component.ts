import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Services/Customer';
import { CustomerService } from 'src/app/Services/customer.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customer!: Customer[];
  createCustomer!: FormGroup;
  constructor(private customerServices:CustomerService, private router:Router) {}

  ngOnInit(): void {
    this.getCustomersList();


    this.createCustomer=new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    });
  }


  public AddtoCustomer(){
    return this.customerServices.createCustomer(this.createCustomer.value).subscribe(data=>{
      console.log(data)
      this.getCustomersList();
    });
  }
  // //navigate to customer table
  // public goToCustomers(){
  //   this.router.navigate(['home/customers'])
  // }
  

  public getCustomersList(){
    this.customerServices.getCustomersList().subscribe(data=>{
      this.customer=data;
      console.log(data);
    });
  }
  
  submit(){
    console.log(this.createCustomer.value)
    this.AddtoCustomer();
  }

}
