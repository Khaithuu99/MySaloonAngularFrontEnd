import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/Services/Customer';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  id!: number;
  customer: Customer = new Customer();

  constructor(private customerService: CustomerService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.customerService.getCustomerById(this.id).subscribe(data=>{
      this.customer=data;
    });
  }

  onSubmit(){
    this.customerService.updateCustomer(this.id, this.customer).subscribe(data=>{
      this.goToCustomerTable();
    });
  }

  goToCustomerTable(){
    this.router.navigate(['navbar/customers/customers-list']);
  }

}
