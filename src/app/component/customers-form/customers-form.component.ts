import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Services/Customer';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-customers-form',
  templateUrl: './customers-form.component.html',
  styleUrls: ['./customers-form.component.css']
})
export class CustomersFormComponent implements OnInit {

  customer: Customer = new Customer()
  CreateCustomer!: FormGroup;
  constructor( private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.CreateCustomer = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),

    });
  }

  
  public AddToCustomer(){
    this.customerService.createCustomer(this.CreateCustomer.value).subscribe( data =>{
      console.log(data);
      this.goToCustomerList();
    },
    error => console.log(error));
  }

  goToCustomerList(){
    this.router.navigate(['navbar/customers/customers-list']);
  }
  
  onSubmit(){
    console.log(this.customer);
    this.AddToCustomer();
  }

}
