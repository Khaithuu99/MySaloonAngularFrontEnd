import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Services/Customer';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customer!: Customer[];

  constructor( private customerService:CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  public getCustomers(){
    this.customerService.getCustomersList().subscribe(data => {
      console.log(data);
      this.customer = data;
    });
  }

  public updateCustomer(id:number){
    this.router.navigate(['navbar/customers/customer-update', {id}]);
  }

  public deleteCustomer(id:number){
    return this.customerService.deleteCustomer(id).subscribe(data=> {
      console.log(data);
      this.getCustomers();
    })
  }

}
