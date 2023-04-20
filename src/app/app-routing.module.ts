import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingModule } from './landing/landing.module';
import { CustomerModule } from './customer/customer.module';

const routes: Routes = [
  {path : "", loadChildren:() => LandingModule },
  {path:"customer",loadChildren: () => CustomerModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
