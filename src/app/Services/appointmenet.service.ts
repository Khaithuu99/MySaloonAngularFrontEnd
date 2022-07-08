import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmenetService {
  private baseURL = "http://localhost:8080/api/appointment/";

  constructor(private httpClient: HttpClient, private router: Router) { }

  getAppointmentList(): Observable<Appointment[]>{
    return this.httpClient.get<Appointment[]>(`${this.baseURL}`);
  }

  createAppointment(appointment: AppointmenetService): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, appointment);
  }

  getAppointmentById(id: number): Observable<Appointment>{
    return this.httpClient.get<Appointment>(`${this.baseURL}${id}`);
  }

  updateAppointment(id: number, appointment: Appointment): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}${id}`, appointment);
  }

  deleteAppointment(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}${id}`);
  }
}
