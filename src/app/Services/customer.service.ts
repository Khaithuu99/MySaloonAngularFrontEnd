import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './Customer';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseURL = "http://localhost:8080/api/customers/";

  constructor(private httpClient: HttpClient, private router: Router) { }

  getCustomersList(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.baseURL}`);
  }
  getCustomersEmails(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.baseURL}`);
  }

  createCustomer(customer: CustomerService): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, customer);
  }

  getCustomerById(id: number): Observable<Customer>{
    return this.httpClient.get<Customer>(`${this.baseURL}${id}`);
  }

  updateCustomer(id: number, customer: Customer): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}${id}`, customer);
  }

  deleteCustomer(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}${id}`);
  }
}
