import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgMaterialModuleModule } from '../ng-material-module/ng-material-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    NgMaterialModuleModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CustomerModule {}
