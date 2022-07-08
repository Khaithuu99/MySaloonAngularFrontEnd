import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmenetService } from 'src/app/Services/appointmenet.service';
import { Appointment} from 'src/app/Services/appointment';

@Component({
  selector: 'app-orders-form',
  templateUrl: './orders-form.component.html',
  styleUrls: ['./orders-form.component.css']
})
export class OrdersFormComponent implements OnInit {
  appointment: Appointment = new Appointment();
  CreateAppointment!: FormGroup;
  constructor(private appointmentService: AppointmenetService, private router: Router) { }

  ngOnInit(): void {
    this.CreateAppointment = new FormGroup({
      name: new FormControl(''),
      appointmentDate: new FormControl(''),
      description: new FormControl('')

    });
  }

  public AddToAppointment(){
    this.appointmentService.createAppointment(this.CreateAppointment.value).subscribe( data =>{
      console.log(data);
      this.goToAppointmentList();
    });
  }

  goToAppointmentList(){
    this.router.navigate(['navbar/orders/orders-list']);
  }

  onSubmit(){
    console.log(this.appointment);
    this.AddToAppointment();
  }

}
