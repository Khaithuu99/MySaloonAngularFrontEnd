import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerUpdateComponent } from './component/customer-update/customer-update.component';
import { CustomersFormComponent } from './component/customers-form/customers-form.component';
import { CustomersListComponent } from './component/customers-list/customers-list.component';
import { CustomersComponent } from './component/customers/customers.component';
import { EmailsComponent } from './component/emails/emails.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { OrdersFormComponent } from './component/orders-form/orders-form.component';
import { OrdersTableComponent } from './component/orders-table/orders-table.component';
import { OrdersComponent } from './component/orders/orders.component';
import { ServicesFormComponent } from './component/services-form/services-form.component';
import { ServicesListComponent } from './component/services-list/services-list.component';
import { ServicesComponent } from './component/services/services.component';
import { UpdateOrderComponent } from './component/update-order/update-order.component';

const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'navbar', component:NavbarComponent, children:[
      {path:'orders', component:OrdersComponent, children:[
        {path:'orders-form', component:OrdersFormComponent},
        {path:'orders-list', component:OrdersTableComponent},
        {path:'update-order', component:UpdateOrderComponent}
      ]},
      {path:'services', component:ServicesComponent, children:[
        {path:'services-form', component:ServicesFormComponent},
        {path:'services-list', component:ServicesListComponent}
      ]},
      {path:'customers', component:CustomersComponent, children:[
        {path:'customers-form', component:CustomersFormComponent},
        {path:'customers-list', component:CustomersListComponent},
        {path:'customer-update', component:CustomerUpdateComponent}
      ]},
      {path:'emails',component:EmailsComponent}
    ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
