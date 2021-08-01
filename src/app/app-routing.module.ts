import { PaymentComponent } from './payment/payment.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { CarsearchComponent } from './carsearch/carsearch.component';
import { ContactComponent } from './contact/contact.component';
import { DriverrentComponent } from './driverrent/driverrent.component';
import { RegularComponent } from './regular/regular.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', component: RegisterUserComponent},
  {path: 'regular', component: RegularComponent},
  {path: 'register-user', component: RegisterUserComponent},
  {path: 'carsearch', component: CarsearchComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'driverrent', component: DriverrentComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'payment', component: PaymentComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
