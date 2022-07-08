import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { CustomersComponent } from './component/customers/customers.component';
import { ServicesComponent } from './component/services/services.component';
import { OrdersComponent } from './component/orders/orders.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { OrdersFormComponent } from './component/orders-form/orders-form.component';
import { OrdersTableComponent } from './component/orders-table/orders-table.component';
import { ServicesFormComponent } from './component/services-form/services-form.component';
import { ServicesListComponent } from './component/services-list/services-list.component';
import { CustomersFormComponent } from './component/customers-form/customers-form.component';
import { CustomersListComponent } from './component/customers-list/customers-list.component';
import { CustomerUpdateComponent } from './component/customer-update/customer-update.component';
import { UpdateOrderComponent } from './component/update-order/update-order.component';
import { EmailsComponent } from './component/emails/emails.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomersComponent,
    ServicesComponent,
    OrdersComponent,
    NavbarComponent,
    OrdersFormComponent,
    OrdersTableComponent,
    ServicesFormComponent,
    ServicesListComponent,
    CustomersFormComponent,
    CustomersListComponent,
    CustomerUpdateComponent,
    UpdateOrderComponent,
    EmailsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
