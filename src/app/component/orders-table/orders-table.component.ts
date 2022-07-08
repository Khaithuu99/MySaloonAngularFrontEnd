import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmenetService } from 'src/app/Services/appointmenet.service';
import { Appointment } from 'src/app/Services/appointment';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css']
})
export class OrdersTableComponent implements OnInit {
  appointment!: Appointment[];

  constructor( private appointmentService:AppointmenetService, private router:Router) { }

  ngOnInit(): void {
    this.getAppointments();
  }

  public getAppointments(){
    this.appointmentService.getAppointmentList().subscribe(data => {
      console.log(data);
      this.appointment = data;
    });
  }

  public deleteAppointment(id:number){
    return this.appointmentService.deleteAppointment(id).subscribe(data=> {
      console.log(data);
      this.getAppointments();
    });
  }
  
  public updateAppointment(id:number){
    this.router.navigate(['navbar/orders/update-order', {id}]);
  }

  
}
