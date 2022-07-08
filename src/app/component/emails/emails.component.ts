import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Services/Customer';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.css']
})
export class EmailsComponent implements OnInit {
  
  customer!: Customer[];

  constructor( private customerService:CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  public getCustomers(){
    this.customerService.getCustomersEmails().subscribe(email => {
      console.log(email);
      this.customer = email;
    });
  }
}
