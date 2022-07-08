import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmenetService } from 'src/app/Services/appointmenet.service';
import { Appointment } from 'src/app/Services/appointment';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {
  id!: number;
  appointment: Appointment = new Appointment();
  constructor(private appointmentService: AppointmenetService,
   private route: ActivatedRoute,
   private router: Router ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.appointmentService.getAppointmentById(this.id).subscribe(data=>{
      this.appointment=data;
    });
  }
  onSubmit(){
    this.appointmentService.updateAppointment(this.id, this.appointment).subscribe(data=>{
      this.goToAppointmentTable();
    });
  }
  
  goToAppointmentTable(){
    this.router.navigate(['navbar/orders/orders-list']);
  }

}
